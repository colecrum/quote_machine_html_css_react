const availableQuotes = [
["The Best Way To Get Started Is To Quit Talking And Begin Doing.", "Walt Disney"],
["The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.", "Winston Churchill"],
["Don’t Let Yesterday Take Up Too Much Of Today.", "Will Rogers"],
["It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.", "Vince Lombardi"],
["If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.", "Steve Jobs"],
["People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.", "Rob Siltanen"],
["We May Encounter Many Defeats But We Must Not Be Defeated.", "Maya Angelou"],
["Knowing Is Not Enough; We Must Apply. Wishing Is Not Enough; We Must Do.", "Johann Wolfgang Von Goethe"],
["Whether You Think You Can Or Think You Can’t, You’re Right.", "Henry Ford"],
["The Man Who Has Confidence In Himself Gains The Confidence Of Others.", "Hasidic Proverb"],
["Creativity Is Intelligence Having Fun.", "Albert Einstein"]];


const styles = [
["#4B0082", "Amarante, Gerogia, serif"], ["#8B4A9D", "'Antic Slab', Papyrus, fantasy"], ["#0370B2", "'Aref Ruqaa', Impact, fantasy"], ["#0A8C79", "Calistoga, 'Comic Sans MS', cursive"], ["#35A047", "Chewy, 'Lucida Sans Typewriter', monospace"], ["#FED00D", "'Cinzel Decorative', Rockwell, serif"], ["#F26721", "Coiny, 'Goudy Old Style', serif"], ["#E32925", "'Della Respira', 'Book Antiqua', serif"]];


const randInd = x => Math.floor(Math.random() * x);

// React

class QuoteMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: randInd(availableQuotes.length),
      style: randInd(styles.length) };

    this.generateNew = this.generateNew.bind(this);
    this.tweet = this.tweet.bind(this);
    this.facebook = this.facebook.bind(this);
  }
  generateNew(e) {
    e.preventDefault();
    let newQuote = randInd(availableQuotes.length);
    let newStyle = randInd(styles.length);
    this.setState({
      quote: newQuote,
      style: newStyle });

  }
  tweet() {
    return "https://twitter.com/intent/tweet?hashtags=quotes&text=" + availableQuotes[this.state.quote][0] + " -" + availableQuotes[this.state.quote][1] + " -- Quote of the Day from Cole";
  }
  facebook() {
    return "https://www.facebook.com/sharer.php?u=#url" + availableQuotes[this.state.quote][0] + " -" + availableQuotes[this.state.quote][1] + " -- Quote of the Day from Cole";
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("div", { id: "quote-box" }, /*#__PURE__*/
      React.createElement("div", { id: "wrap", style: { backgroundColor: styles[this.state.style][0] } }, /*#__PURE__*/
      React.createElement("div", { class: "fullCard" }, /*#__PURE__*/
      React.createElement("div", { id: "qWrap" }, /*#__PURE__*/
      React.createElement("i", { className: "fa fa-quote-left", id: "quoteiconL", style: { color: styles[this.state.style][0] } }), /*#__PURE__*/
      React.createElement("p", { id: "text", style: { color: styles[this.state.style][0], fontFamily: styles[this.state.style][1] } }, availableQuotes[this.state.quote][0]), /*#__PURE__*/
      React.createElement("i", { className: "fa fa-quote-right", id: "quoteiconR", style: { color: styles[this.state.style][0] } })), /*#__PURE__*/

      React.createElement("div", { id: "aWrap" }, /*#__PURE__*/
      React.createElement("p", { id: "author", style: { color: styles[this.state.style][0], fontFamily: styles[this.state.style][1] } }, availableQuotes[this.state.quote][1])), /*#__PURE__*/

      React.createElement("div", { id: "click", class: "row" }, /*#__PURE__*/
      React.createElement("button", { id: "new-quote", style: { backgroundColor: styles[this.state.style][0], fontFamily: styles[this.state.style][1] }, onClick: this.generateNew }, "New Quote"), /*#__PURE__*/
      React.createElement("a", { href: this.tweet(), id: "tweet-quote", class: "fa fa-twitter" }), /*#__PURE__*/
      React.createElement("a", { href: this.facebook(), id: "fb-quote", class: "fa fa-facebook" })))))));






  }}


ReactDOM.render( /*#__PURE__*/
React.createElement(QuoteMachine, null), document.getElementById("root"));