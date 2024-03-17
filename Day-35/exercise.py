
library_name = "CCR LIBRARY"
library_location = "Hyderabad"

books = [
    {"title": "Introduction to Python", "author": "John Python", "genre": "Programming"},
    {"title": "Python for Beginners", "author": "Alice Coder", "genre": "Programming"},
    {"title": "Mystery of Pythonic Code", "author": "Sherlock Hacker", "genre": "Mystery"},
]

library_staff = {
    "librarian": {"name": "Namratha", "age": 35, "role": "Librarian"},
    "assistant": {"name": "Maheshbabu", "age": 28, "role": "Assistant Librarian"},
}

print("Relevant Books for Programming Enthusiasts:")
for book in books:
    if book["genre"] == "Programming":
        print(f"- {book['title']} by {book['author']}")

print("\nInformation about each book in the library:")
for book in books:
    print(f"Title: {book['title']}, Author: {book['author']}, Genre: {book['genre']}")

def print_staff_info(staff_dict):
    for role, info in staff_dict.items():
        print(f"Role: {info['role']}, Name: {info['name']}, Age: {info['age']}")


print_staff_info({"librarian": library_staff["librarian"]})

favorite_genre = input("\nEnter your favorite book genre: ").capitalize()
found_books = False
print(f"\nBooks available in {favorite_genre} genre:")
for book in books:
    if book["genre"] == favorite_genre:
        print(f"- {book['title']}")
        found_books = True

if not found_books:
    print(f"Sorry, the library doesn't have books in {favorite_genre} genre.")
