from flask import Flask, request
from flask_cors import CORS, cross_origin
import requests
import json
from bs4 import BeautifulSoup

app = Flask(__name__)
CORS(app)

@app.route("/search", methods=['POST'])
def search():
    search_input = request.get_json()["input"]
    print(search_input)
    term = "2021 Fall"
    course_number = search_input["class"]
    department = search_input["department"]
    instructor = search_input["teacher"]
    url = "https://api.peterportal.org/rest/v0/schedule/soc?term="+term+"&department="+department+"&courseNumber="+course_number+"&instructorName="+instructor
    r = requests.get(url)
    search_result = json.loads(r.text)


    file = open("prof_dict.json")
    profs = json.load(file)
    for tid, name in profs.items():
        if name[0].lower() == "thornton":
            prof_data = requests.get("https://www.ratemyprofessors.com/ShowRatings.jsp?tid=" + tid)
            #prof_data = json.loads(prof_data_.content)
            soup = BeautifulSoup(prof_data.text, "html.parser")
            rating = soup.find("div", class_="RatingValue__Numerator-qw8sqy-2 liyUjw")
            print(rating.text)
    #return prof_data.text
    return search_result
    #return requests.get("https://api.peterportal.org/rest/v0/schedule/soc?term="+term+"&department="+dep).json()

if __name__ == "__main__":
    app.run(debug=True)

