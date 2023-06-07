import json

# Read JSON file and load data
with open('posts.json', 'r') as json_file:
    data = json.load(json_file)

# Sort posts in descending order by date (inline key specification)
data['posts'].sort(key=lambda post: post['date'], reverse=True)

# Write the sorted data back into the JSON file with tab indentation
with open('posts.json', 'w') as json_file:
	json.dump(data, json_file, indent='\t', separators=(',', ': '))

