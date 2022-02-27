from flask import Flask, request
from flask_cors import CORS, cross_origin
import requests
import json
from bs4 import BeautifulSoup

app = Flask(__name__)
CORS(app)

@app.route("/search", methods=['POST'])
def members():
    search_input = request.get_json()
    print(search_input)
    term = "2021 Fall"
    dep = "I%26C SCI"
    param = {"term" : term, "department" : dep}
    #data = json.loads(requests.get("https://api.peterportal.org/rest/v0/schedule/soc?term="+term+"&department="+dep))
    #uci = RateMyProfScraper(1074)
    #uci.SearchProfessor("Alex Thornton")
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
    return "{\"prof\": \"thornton\"}"
    #return requests.get("https://api.peterportal.org/rest/v0/schedule/soc?term="+term+"&department="+dep).json()

if __name__ == "__main__":
    app.run(debug=True)

