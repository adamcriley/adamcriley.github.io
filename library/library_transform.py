import json
import re
import argparse
import sys
from datetime import datetime
from pathlib import Path

def convert_minutes_to_hours_minutes(minutes):
    """Convert minutes to 'Xh Ym' format"""
    if minutes is None:
        return "0h 0m"
    
    hours = minutes // 60
    remaining_minutes = minutes % 60
    return f"{hours}h {remaining_minutes}m"

def clean_description(description):
    """Remove HTML tags and clean up description"""
    if not description:
        return ""
    
    # Remove HTML tags
    clean_desc = re.sub(r'<[^>]+>', '', description)
    
    # Split into sentences and take the first one or two
    sentences = clean_desc.split('.')
    if len(sentences) > 0:
        # Take first sentence and add period back
        return sentences[0].strip() + '.'
    
    return clean_desc.strip()

def parse_categories(categories_string):
    """Parse categories string into a list"""
    if not categories_string:
        return []
    
    # Split by semicolon and clean up whitespace
    categories = [cat.strip() for cat in categories_string.split(';')]
    return [cat for cat in categories if cat]  # Remove empty strings

def parse_date(date_string):
    """Parse date string and return just the date part"""
    if not date_string:
        return ""
    
    try:
        # Parse the datetime string and return just the date part
        dt = datetime.fromisoformat(date_string.replace('Z', '+00:00'))
        return dt.strftime('%Y-%m-%d')
    except:
        return ""

def generate_cover_path(picture_id):
    """Generate cover image path from PictureId"""
    if not picture_id:
        return ""
    
    # Format: BookImages/{PictureId}_80x80.jpg
    return f"BookImages/{picture_id}_80x80.jpg"

def transform_audiobook_data(input_data):
    """Transform the input JSON format to the desired output format"""
    
    # Transform each book
    transformed_books = []
    
    for book in input_data:
        transformed_book = {
            "title": book.get("Title", ""),
            "author": book.get("AuthorNames", ""),
            "narrator": book.get("NarratorNames", ""),
            "length": convert_minutes_to_hours_minutes(book.get("LengthInMinutes")),
            "rating": round(book.get("CommunityRatingOverall", 0), 2),
            "categories": parse_categories(book.get("CategoriesNames", "")),
            "description": clean_description(book.get("Description", "")),
            "finished": book.get("IsFinished", False),
            "dateAdded": parse_date(book.get("DateAdded", "")),
            "cover": generate_cover_path(book.get("PictureId", ""))
        }
        
        transformed_books.append(transformed_book)
    
    return transformed_books

def read_json_file(file_path):
    """Read and parse JSON file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
        return data
    except FileNotFoundError:
        print(f"Error: File '{file_path}' not found.")
        return None
    except json.JSONDecodeError as e:
        print(f"Error parsing JSON file: {e}")
        return None
    except Exception as e:
        print(f"Error reading file: {e}")
        return None

def write_json_file(data, file_path):
    """Write data to JSON file"""
    try:
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
        return True
    except Exception as e:
        print(f"Error writing to file '{file_path}': {e}")
        return False

def main():
    # Set up command line argument parsing
    parser = argparse.ArgumentParser(
        description='Transform audiobook JSON data from one format to another',
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  python transform_audiobooks.py input.json
  python transform_audiobooks.py input.json -o output.json
  python transform_audiobooks.py input.json --output transformed_books.json
        """
    )
    
    parser.add_argument('input_file', 
                       help='Path to the input JSON file')
    parser.add_argument('-o', '--output', 
                       default=None,
                       help='Path to the output JSON file (default: adds "_transformed" to input filename)')
    
    args = parser.parse_args()
    
    # Validate input file exists
    input_path = Path(args.input_file)
    if not input_path.exists():
        print(f"Error: Input file '{args.input_file}' does not exist.")
        sys.exit(1)
    
    # Determine output file path
    if args.output:
        output_path = Path(args.output)
    else:
        # Create output filename by adding "_transformed" before the extension
        output_path = input_path.parent / f"{input_path.stem}_transformed{input_path.suffix}"
    
    print(f"Reading input file: {input_path}")
    
    # Read input JSON file
    input_data = read_json_file(input_path)
    if input_data is None:
        sys.exit(1)
    
    # Validate that input_data is a list
    if not isinstance(input_data, list):
        print("Error: Input JSON should contain a list of audiobook objects.")
        sys.exit(1)
    
    print(f"Processing {len(input_data)} audiobook(s)...")
    
    # Transform the data
    try:
        transformed_data = transform_audiobook_data(input_data)
        print(f"Successfully transformed {len(transformed_data)} audiobook(s)")
    except Exception as e:
        print(f"Error during transformation: {e}")
        sys.exit(1)
    
    # Write output JSON file
    print(f"Writing output file: {output_path}")
    if write_json_file(transformed_data, output_path):
        print(f"✓ Transformation complete! Output saved to '{output_path}'")
        
        # Display a preview of the first transformed book
        if transformed_data:
            print("\nPreview of first transformed book:")
            print(json.dumps(transformed_data[0], indent=2, ensure_ascii=False))
    else:
        sys.exit(1)

if __name__ == "__main__":
    main()