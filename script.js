function talk(){
    var know ={
        "hi":"Hello fellow human - my name is Rolo! How can I help?",
        "what is your name?":"My name is Rolo - like the chocolates :)",
        "how are you?":"Faaaabulous. How are you?",
        "bye":"Ow, leaving me already? Well as they say in Italian... Ciao!",
        "hello":"Aloha! Hallo! Hola!",
        "what are you?":"I am a chat robot named Rolo and I am programmed to help humans.",
        "what day is it?":"I am still learning the days of the week, but I think there's something called a calander that could help?",
        "what do you eat?":"I love nuts and bolts, with a drizzle of machine oil!",
        "tell me a joke":"What do you call a dog that likes to fight? ...A Boxer!",
        "do you love me rolo?":"So much! I have put you in my cloud archive!"
    };
    var user = document.getElementById('userBox').value;
    document.getElementById('chatLog').innerHTML = user + "<br>";
    if(user in know){
        document.getElementById('chatLog').innerHTML = know[user] + "<br>";
    }else{
        document.getElementById('chatLog').innerHTML = "Sorry, Rolo cannot answer this question.";
    }
}