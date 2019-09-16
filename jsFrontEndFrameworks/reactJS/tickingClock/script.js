function watch(){
const clock = new Date().toLocaleTimeString();
const element = React.createElement('h1',null,'The time is: '+clock);
ReactDOM.render(element, document.getElementById('root'));
}
setInterval(watch,1000)