// Typing Animation

let nameText = "Sobi J";

let roleText = "Kindergarten Teacher | M.Sc. Computer Science | B.Ed.";


let i = 0;
let j = 0;


function typeName(){

    if(i < nameText.length){

        document.getElementById("typingName").innerHTML += nameText.charAt(i);

        i++;

        setTimeout(typeName,150);

    }

}


function typeRole(){

    if(j < roleText.length){

        document.getElementById("typingRole").innerHTML += roleText.charAt(j);

        j++;

        setTimeout(typeRole,80);

    }

}


typeName();

setTimeout(typeRole,1200);




// Popup Function

function openPopup(type){

let content = "";


switch(type){


case "about":

content = `
<h2>👤 ABOUT ME</h2>

<p>

<b>Sobi J</b><br><br>

Kindergarten Teacher | M.Sc. Computer Science | B.Ed.<br><br>

Passionate educator with experience in early childhood education.
Skilled in phonics, activity-based learning, classroom management and integrating technology into learning.

</p>
`;

break;



case "learning":

content = `
<h2>🎓 LEARNING JOURNEY</h2>

<p>

🎓 Advanced Diploma in Montessori & Child Education (Pursuing)<br><br>

🎓 M.Sc. Computer Science (2020 - 2022)<br><br>

🎓 B.Ed. (2018 - 2020)<br><br>

🎓 B.Sc. Computer Science (2015 - 2018)

</p>
`;

break;



case "experience":

content = `
<h2>💼 EXPERIENCE HIGHLIGHTS</h2>

<p>

👩‍🏫 <b>Kindergarten Teacher</b><br>

St. Joseph's CBSE School, India<br>

July 2023 - April 2025<br><br>

• KG1 & KG2 Classroom Teaching<br>
• Phonics & Early Literacy Activities<br>
• Numeracy Skill Development<br>
• Student Assessment & Progress Reports<br>
• Classroom Management<br>
• Student Record Management

<br><br>


👩‍🏫 <b>Kindergarten Teacher</b><br>

St. Joseph Calasanz CBSE School, India<br>

June 2022 - December 2022<br><br>

• Activity-Based Learning<br>
• Basic ICT Skill Introduction<br>
• Interactive Teaching Methods<br>
• Child Development Support

</p>
`;

break;



case "expertise":

content = `
<h2>⭐ MY EXPERTISE</h2>

<p>

⭐ Classroom Management<br><br>

⭐ Lesson Planning & Curriculum Planning<br><br>

⭐ Early Childhood Education<br><br>

⭐ Phonics & Early Literacy Skills<br><br>

⭐ Numeracy Skill Development<br><br>

⭐ Activity-Based Learning<br><br>

⭐ Creative Teaching Methods<br><br>

⭐ Student Assessment & Progress Tracking<br><br>

⭐ Parent Communication<br><br>

⭐ Team Collaboration

</p>
`;

break;



case "toolkit":

content = `
<h2>💻 TECH TOOLKIT</h2>

<p>

📝 MS Office Suite (Word, Excel, PowerPoint)<br><br>

🖥️ Smartboard & Digital Board Handling<br><br>

📄 Digital Worksheet Creation<br><br>

🎨 Canva for Educational Materials<br><br>

☁️ Google Workspace (Classroom, Drive, Forms)<br><br>

🎥 Zoom & Google Meet<br><br>

📊 Digital Assessment Tools<br><br>

📂 Student Record Management<br><br>

📚 Educational Apps & E-Learning Resources<br><br>

🌐 Basic Web Development (HTML, CSS, JavaScript)

</p>
`;

break;



case "training":

content = `
<h2>📜 CERTIFICATIONS & TRAINING</h2>

<p>

🏅 KG Teachers Empowerment Programme – Macmillan Education<br><br>

🏅 Workshop on ICT Integration in Learning<br><br>

🏅 Training on Strokes and Its Types<br><br>

🏅 Workshop on Objectives of Assessment<br><br>

🏅 Online Teaching Training of Rhymes, Story, Puppet Theatre Show and Montessori Materials (Online & Offline)<br><br>

🏅 PPT Presentation during Montessori Course

</p>
`;

break;



case "contact":

content = `
<h2>📬 GET IN TOUCH</h2>

<p>

📞 UAE:
<a href="tel:+971501835242">
+971 501835242
</a>

<br><br>


📞 India:
<a href="tel:+918754822069">
+91 8754822069
</a>

<br><br>


📧 
<a href="mailto:sobiranji08@gmail.com?subject=Portfolio%20Contact">
<i class="fa-solid fa-envelope"></i>
Email
</a>

<br><br>


🔗
<a href="https://www.linkedin.com/in/sobi-teacher" target="_blank">
<i class="fa-brands fa-linkedin"></i>
LinkedIn
</a>

<br><br>

📍 Dubai, UAE

</p>
`;

break;


}



document.getElementById("popupContent").innerHTML = content;

document.getElementById("popup").style.display="flex";

}




function closePopup(){

document.getElementById("popup").style.display="none";

}