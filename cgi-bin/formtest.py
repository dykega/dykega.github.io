#!/usr/bin/env python3

import os

print ("content-type: text/html")
print("")

print('''
	<form method="get">

	<input type="text" name="firstname" />
	<input type="text" name="lastname" />
	<input type="submit" value="submit" />

	</form>
	''')
if "QUERY_STRING" in os.environ:
	if os.environ["QUERY_STRING"] == "":
		print("<code>",os.environ["QUERY_STRING"],"</code>")
		print("<p>h</p>")
print("<br> ")
x = os.environ["QUERY_STRING"]
for item in x.split("&"):
	for val in item.split("="):
		print("<p>",val,"</p>")