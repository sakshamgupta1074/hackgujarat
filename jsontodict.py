import json


with open('responses.json') as f_in:
	my_data = json.load(f_in)
	print(my_data['userinfo']['fname'])
	print(my_data['userinfo']['lname'])