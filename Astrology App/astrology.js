const zodiacSigns =
  ["Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius"];

//31 Compliments based on date
const compliments = [
  "You have a brilliant mind.",
  "Your smile can brighten anyone’s day.",
  "You are stronger than you think.",
  "You bring positive energy wherever you go.",
  "Your creativity is impressive.",
  "You have a kind and generous heart.",
  "You handle challenges with great courage.",
  "You are a fast learner.",
  "Your ideas are valuable and unique.",
  "You inspire people around you.",
  "You are making real progress every day.",
  "You communicate your thoughts clearly.",
  "You are dependable and trustworthy.",
  "Your hard work truly shows.",
  "You have a great sense of humor.",
  "You make people feel comfortable.",
  "You are confident and capable.",
  "Your determination is admirable.",
  "You think in a smart and practical way.",
  "You have excellent problem-solving skills.",
  "You are patient and understanding.",
  "Your presence makes a difference.",
  "You always try to improve yourself.",
  "You are brave enough to try new things.",
  "You are thoughtful and considerate.",
  "You have amazing potential.",
  "You stay calm in difficult situations.",
  "You are unique in your own wonderful way.",
  "You spread kindness effortlessly.",
  "You are doing better than you realize.",
  "You deserve success and happiness."
];

// size 20
const victimMindsetMessages = [
  "You always do good to others but never get the same in return.",
  "No matter how hard you try, people still misunderstand you.",
  "You are always there for everyone, but no one is there for you.",
  "You give your best, yet it never feels enough.",
  "Others get appreciated for less, but you get ignored.",
  "You sacrifice your time, but nobody notices.",
  "You forgive easily, but people keep hurting you.",
  "You put others first and end up last.",
  "You support everyone’s dreams while yours stay unseen.",
  "You stay loyal, but loyalty is rarely returned.",
  "You fix others’ problems while carrying your own alone.",
  "You stay quiet to keep peace, but nobody understands your silence.",
  "You try to stay positive, but life keeps testing you.",
  "You give chances, but people take advantage of you.",
  "You care deeply, but people treat it lightly.",
  "You work harder than most, yet success feels far away.",
  "You help others grow, but you feel left behind.",
  "You stay strong for everyone, but break inside.",
  "You always choose kindness, even when the world is unfair.",
  "You keep hoping things will change, but they rarely do."
];

// size is 30
const recommendation = [
  "Today is a good day to show kindness—feed a street dog or help someone in need.",
  "The stars suggest focusing on your health—take a short walk and breathe deeply.",
  "Positive energy surrounds you—reach out to an old friend.",
  "Today favors learning—read something that expands your mind.",
  "Your aura needs balance—spend time in nature.",
  "The universe encourages gratitude—write down three things you are thankful for.",
  "It’s a powerful day to forgive and release past negativity.",
  "Financial luck improves when you save wisely today.",
  "The planets support new beginnings—start a small habit you’ve been delaying.",
  "Your communication energy is strong—speak honestly but kindly.",
  "Today is ideal for organizing your space and clearing clutter.",
  "The cosmic flow supports meditation and self-reflection.",
  "You may feel emotional—channel it into creativity.",
  "A random act of kindness will return to you unexpectedly.",
  "Today is lucky for setting clear personal goals.",
  "The stars advise patience in difficult conversations.",
  "Helping someone today will bring inner peace.",
  "Focus on healthy eating—your body will thank you.",
  "Avoid unnecessary arguments; silence will protect your energy.",
  "It’s a favorable time to plan your future finances.",
  "Spend quality time with family—the universe supports bonding.",
  "Trust your intuition when making decisions today.",
  "A small donation or charity act will attract positive karma.",
  "Today is perfect for breaking one bad habit.",
  "Your leadership skills shine—take initiative.",
  "Rest is essential today—prioritize good sleep.",
  "Express appreciation to someone who supports you.",
  "Let go of comparison—the stars want you to value your uniqueness.",
  "Practice mindfulness to align your inner and outer world.",
  "Today brings growth if you step out of your comfort zone."
];

//size is 20
const futurePredictions = [
  "You will achieve great financial success in the coming years.",
  "You will become wealthy through your hard work and smart decisions.",
  "A big career opportunity will soon come your way.",
  "You will build a life that others admire.",
  "Your efforts will soon turn into impressive results.",
  "You will gain respect and recognition in your field.",
  "A powerful connection will change your future for the better.",
  "You will overcome a major challenge and grow stronger.",
  "Unexpected financial gains are waiting for you.",
  "You will create multiple sources of income.",
  "Your leadership skills will bring you success.",
  "You will travel to places you once only dreamed about.",
  "Your confidence will attract amazing opportunities.",
  "You will inspire many people with your journey.",
  "Your investments will multiply in the future.",
  "You will enjoy both wealth and inner peace.",
  "A dream you have will soon become reality.",
  "You will build a strong and happy family life.",
  "Your name will be associated with success.",
  "You will become a crorepati through persistence and smart planning."
];

const submit = document.getElementById("form");

submit.addEventListener('submit', (event) => {
  event.preventDefault();
  const fname = document.getElementById('fname').value;
  const lname = document.getElementById('lname').value;
  const day = Number(document.getElementById('DOB').value);
  const month = Number(document.getElementById('month').value);
  const year = Number(document.getElementById('year').value);

  const result = document.getElementById('result');

  const regex= /^[A-Za-z]+$/;
 
  if(regex.test(fname) && regex.test(lname))
  {
    
    const first_message = `Hello ${fname} ${lname}!`;
    const second_message = `Your Zodiac Sign is ${zodiacSigns[month - 1]}`;
    const third_message = compliments[day - 1];
    let random = Math.floor(Math.random() * 20);
    const fourth_message = victimMindsetMessages[random];
    random = (fname.length * lname.length * year) % 30;
    const fifth_message = recommendation[random];
    random = (day * month * year) % 20;
    const sixth_message = futurePredictions[random];
    result.innerHTML = `${first_message} ${second_message} . ${third_message} ${fourth_message}  Our recommendation for you: ${fifth_message} Your Future Prediction is: ${sixth_message}`;
  }
  
  else
  {
    result.textContent = `Invalid Name or Surname field! Please fill it correctly..`;
  }

})

