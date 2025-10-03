// We need both d3 & c3 when using c3. So bear that in mind, I guess.
// I couldn't get it to work with imports like the other one in the js here.
// SO this is implicitly relying ont eh html imports. Just reemmber that!

var rawData = `Ohh
La la la la la
Ohh
Yeah

I know it might be crazy
But did you hear the story?
I think I heard it vaguely
A girl and a zombie
Oh, tell me more, boy
Sounds like a fantasy
Oh, what could go so wrong
With a girl and a zombie
You're from the perfect paradise
And I'm living on the darker side
Ooh, I've got a feeling
If you get to know me
Right from the start, you caught my eye
And something inside me came to life
Ooh, I've got a feeling
If you get to know me

Someday
This could be, this could be ordinary
Someday
Could we be something extraordinary?
You and me side by side
Out in the broad daylight
If they laugh, we'll say
We're gonna be someday
We're gonna be someday
Someday, someday
We're gonna be someday
We're gonna be someday

Girl, you look delicious
Oh, I mean gorgeous
Well, now you're getting fearless
No, I'm just rooting for us
If different was a superpower
We'd be so flawless
Yeah, we could make these two worlds ours
I'm rooting for us
Two lonely hearts meet in the dark
Imagine it now they start a spark
You got my attention
What happens next, then?
Movies and long walks in the park
Hanging out anywhere we want
I like the way you're thinking
I can almost see it

Someday
This could be, this could be ordinary
Someday
Could we be something extraordinary?
You and me side by side
Out in the broad daylight
If they laugh, we'll say
We're gonna be someday
Someday, someday

So let them talk if they wanna
Let them talk if they're gonna
We're gonna do what we wanna
Let them talk, let them talk
If they wanna, they wanna

Someday
This could be, this could be ordinary
Someday
Could we be something extraordinary?
You and me side by side
Out in the broad daylight
If they laugh, we'll say
We're gonna be someday
Someday, someday
We're gonna be someday
Someday, someday
We're gonna be someday`

var splitData = rawData.split(/\s+/)

var data = {}
for (var item in splitData) {
  var li = splitData[item].toLowerCase()
  if (li in data) {
    data[li] += 1
  } else {
      data[li] = 0
  }
  
}

var words = Object.keys(data)

var freqs = []
for (var item in data) {
    freqs.push( {word: item, freq: data[item]})
}

console.log(freqs)
console.log(freqs[0])
console.log(freqs[0].word)
console.log(freqs[0].freq)

// Sort by frequency descending
freqs.sort((a, b) => b.freq - a.freq);

var nice = freqs.slice(0, 20)
console.log(nice)

// These are objects like {word: 'kelly', freq: 10}
// We WANT an object that looks like: [
// ['word', 'a', 'kelly', 'was', 'here'], ['freq', 10, 9, 8, 3]
// ]

console.log(splitData.length)
console.log(words.length)


// Declare the chart dimensions and margins.
const width = 1024;
const height = 750;
const marginTop = 20;
const marginRight = 20;
const marginBottom = 30;
const marginLeft = 40;

console.log(c3)
console.log(c3.generate)

var c3data = ['word']
for (item in nice) {
    c3data.push(nice[item].freq)
}
var chart = c3.generate({
    bindto: '#container',
    data: {
        type: 'bar',
        columns: c3data,
    },
    // bar: {
    //     width: {
    //         ratio: 0.5,
    //     }
    // }
    // axis: {
    //     type: 'category',
    //     categories: nice.map(x => { return x.word; }),
    // }
});
