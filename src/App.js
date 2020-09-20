import React from 'react';
import './App.css';

var images = {"Anger": "rgba(218, 152, 137,", "Fear": "rgba(207, 160, 221,", "Joy": "rgba(239, 228, 144,", "Confident": "rgba(242, 191, 219,", "Sadness":"rgba(166, 213, 215,", "Tentative": "rgba(245, 207, 168,", "Analytical": "rgba(210, 205, 206,"};

var data = {"Coronavirus":{"document_tone":{"tones":[{"score":0.592809,"tone_id":"sadness","tone_name":"Sadness"},{"score":0.6274,"tone_id":"tentative","tone_name":"Tentative"}]}},
            
            "RBG Passing": {"document_tone":{"tones":[{"score":0.520665,"tone_id":"joy","tone_name":"Joy"},{"score":0.564735,"tone_id":"sadness","tone_name":"Sadness"},{"score":0.637147,"tone_id":"tentative","tone_name":"Tentative"},{"score":0.551084,"tone_id":"analytical","tone_name":"Analytical"}]}},

            "Black Lives Matter":{"document_tone":{"tones":[{"score":0.548731,"tone_id":"sadness","tone_name":"Sadness"},{"score":0.650127,"tone_id":"fear","tone_name":"Fear"},{"score":0.575796,"tone_id":"anger","tone_name":"Anger"},{"score":0.508629,"tone_id":"joy","tone_name":"Joy"},{"score":0.6315,"tone_id":"tentative","tone_name":"Tentative"}]}},

            "TikTok Banned": {"document_tone":{"tones":[{"score":0.50918,"tone_id":"joy","tone_name":"Joy"},{"score":0.539377,"tone_id":"sadness","tone_name":"Sadness"},{"score":0.666322,"tone_id":"tentative","tone_name":"Tentative"},{"score":0.574886,"tone_id":"analytical","tone_name":"Analytical"}]}},

            "Parasite Winning Best Picture": {"document_tone":{"tones":[{"score":0.521277,"tone_id":"anger","tone_name":"Anger"},{"score":0.549149,"tone_id":"sadness","tone_name":"Sadness"},{"score":0.66382,"tone_id":"joy","tone_name":"Joy"},{"score":0.80611,"tone_id":"tentative","tone_name":"Tentative"}]}},

            "California wildfires": {"document_tone":{"tones":[{"score":0.577449,"tone_id":"sadness","tone_name":"Sadness"},{"score":0.611978,"tone_id":"joy","tone_name":"Joy"},{"score":0.749594,"tone_id":"tentative","tone_name":"Tentative"}]}},

            "Kobe Bryant Passing": {"document_tone":{"tones":[{"score":0.599272,"tone_id":"sadness","tone_name":"Sadness"},{"score":0.603762,"tone_id":"joy","tone_name":"Joy"},{"score":0.709508,"tone_id":"tentative","tone_name":"Tentative"}]}},

            "Australian Wildfires": {"document_tone":{"tones":[{"score":0.584137,"tone_id":"joy","tone_name":"Joy"},{"score":0.525915,"tone_id":"anger","tone_name":"Anger"},{"score":0.509479,"tone_id":"fear","tone_name":"Fear"},{"score":0.569943,"tone_id":"sadness","tone_name":"Sadness"},{"score":0.719681,"tone_id":"tentative","tone_name":"Tentative"}]}},
            

            "Donald Trump’s Impeachment": {"document_tone":{"tones":[{"score":0.579064,"tone_id":"joy","tone_name":"Joy"},{"score":0.561493,"tone_id":"anger","tone_name":"Anger"}]}},

            "Big Ten Football": {"document_tone":{"tones":[{"score":0.568346,"tone_id":"joy","tone_name":"Joy"},{"score":0.610639,"tone_id":"sadness","tone_name":"Sadness"},{"score":0.501289,"tone_id":"analytical","tone_name":"Analytical"},{"score":0.593664,"tone_id":"tentative","tone_name":"Tentative"}]}},

            "Hong Kong Protests": {"document_tone":{"tones":[{"score":0.606019,"tone_id":"anger","tone_name":"Anger"},{"score":0.560562,"tone_id":"fear","tone_name":"Fear"},{"score":0.548388,"tone_id":"sadness","tone_name":"Sadness"}]}}};




var emotions = ['Anger', 'Fear', 'Joy', 'Sadness', 'Analytical', 'Confident', 'Tentative'];

for (var topic in Object.keys(data)) {
  topic = Object.keys(data)[topic];
  var excluded = [];
  for (var x in emotions) {
    var inc = false;
    for (var y in data[topic]['document_tone']['tones']) {
      if (data[topic]['document_tone']['tones'][y]['tone_name'] == emotions[x]) {
        inc = true;
      }
    }
    if (!inc) {
      excluded.push(emotions[x]);
    }
  }

  for (var x in excluded) {
    data[topic]['document_tone']['tones'].push({"score":"0.10000", "tone_name":excluded[x]});
  }
}

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      signed: false,
      photo: null
    };
  }
  
  render() {
    return (
      <div>
        <div class="title-div">
          <p class="title-text">GlobalMotion</p>
        </div>
        <div class="text-div">
          <p class="text-text">Visualize how the world is feeling today.</p>
          <img class="emoji" src={"https://i.ibb.co/jLSTRdv/download-1.png"} />
        </div>
        <div class="diag"/>
        <div class="diag"/>
        <div class="text-div-mid">
          <img class="world" src={"https://i.ibb.co/qr3jpwY/mirage-61.png"} />
          <div>
            <p class="text-text-mid">Gain New Perspectives.</p>
            <p class="text-text-mid-small">What are people on social media expressing about popular topics? We analyzed the content of popular Reddit posts to find out. The world is a happier place with people around you and we hope this data visualization will show people that every has feelings too!</p>
          </div>
        </div>
        <div class="diag-mid"/>
        <div class="diag-mid"/>
        <p class='topic-title'>How do people feel about...</p>
        {Object.keys(data).map(dataa => (
          <div class="topic-div">
            <p class='topic'>{dataa}?</p>
            <div class='tone-container'>
              {data[dataa]['document_tone']['tones'].map(post => (
                  <Tone emotion={post['tone_name']} value={post['score']}/>
              ))}
            </div>
          </div>
        ))}
        <div class="links-big-div">
          <p class="links-text">Yeah… we know 2020 sucks for all of us around the globe. Here’s some resources to help tackle the year and beyond:</p>
          <div class="links-div">
            <div class="links-div-div">
              General Wellbeing:
              <a href="https://www.cdc.gov/hrqol/wellbeing.htm">CDC Wellbeing</a>
              <a href="https://www.psychologytoday.com/us/blog/click-here-happiness/201812/self-care-12-ways-take-better-care-yourself">Self Care Guide</a>
            </div>
            <div class="links-div-div">
              COVID-19 Related:
              <a href="https://mhanational.org/covid19">COVID-19 info</a>
              <a href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/managing-stress-anxiety.html">Managing stress</a>
              <a href="https://www.hhs.gov/coronavirus/mental-health-and-coping/index.html">Health and coping</a>
              <a href="https://adaa.org/living-with-anxiety/ask-and-learn/screenings">Living with anxiety</a>
            </div>
            <div class="links-div-div">
              LGBTQ+ Resources:
              <a href="https://www.thetrevorproject.org/">Trevor Project</a>
              <a href="https://www.nami.org/Your-Journey/Identity-and-Cultural-Dimensions/LGBTQI">LGBTQ+ Support</a>
            </div>
            <div class="links-div-div">
              Urgent Help:
              <a href="https://www.samhsa.gov/find-help/national-helpline">National Helpline</a>
              <a href="https://suicidepreventionlifeline.org/">Suicide Prevention Hotline</a>
            </div>
          </div>
        </div>

        <div class="title-div-bottom">
          <p class="title-text-bottom">Made for HackMIT 2020.</p>
        </div>
      </div>
    );
  }
}

class Tone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emotion: props.emotion,
      value: props.value      
    };
  }
  
  render() {
    return (
      <div class="tone-div" style={{background: images[this.state.emotion] + this.state.value + ")"}}>
        <div class="tone-center-div">
          <p class="tone-text">{this.state.emotion}</p>
          <p class="tone-text-small">{this.state.value}</p>
        </div>
      </div>
    );
  }
}

export default App;
