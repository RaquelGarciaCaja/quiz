const printHtmlQuestionsBb=e=>{timeEachQuestion(),currentQuestionIndex++;const n=questions[3][e],s=document.querySelector(".bb--container");let o=n.Answer;rightAnswer=o[0],a=o.sort((e,n)=>Math.floor(3*Math.random())-1);const r=a.map(e=>`<h3 class="quiz--containerAnswer"><button class="bb--btn" onClick="answerOk('${e}', this)">X</button><span class="bb--answer">${e}</span></h3>`).join(" ");s.innerHTML=`<h1 class="bb--question">${n.Question}</h1><div>${r}</div>`,10==n.Id&&(btnFinal.style.display="flex"),answerOk()},printHtmlQuestionsFringe=e=>{timeEachQuestion(),currentQuestionIndex++;const n=questions[4][e],s=document.querySelector(".fringe--container");let o=n.Answer;rightAnswer=o[0],a=o.sort((e,n)=>Math.floor(3*Math.random())-1);const r=a.map(e=>`<h3 class="quiz--containerAnswer"><button class="fringe--btn" onClick="answerOk('${e}', this)">X</button><span class="fringe--answer">${e}</span></h3>`).join(" ");s.innerHTML=`<h1 class="fringe--question">${n.Question}</h1><div>${r}</div>`,10==n.Id&&(btnFinal.style.display="flex"),answerOk()},printHtmlQuestionsLost=e=>{timeEachQuestion(),currentQuestionIndex++;const n=questions[2][e],s=document.querySelector(".lost--container");let o=n.Answer;rightAnswer=o[0],a=o.sort((e,n)=>Math.floor(3*Math.random())-1);const r=a.map(e=>`<h3 class="quiz--containerAnswer"><button class="lost--btn" onClick="answerOk('${e}', this)">X</button><span class="lost--answer">${e}</span></h3>`).join(" ");s.innerHTML=`<h1 class="lost--question">${n.Question}</h1><div>${r}</div>`,10==n.Id&&(btnFinal.style.display="flex"),answerOk()},buttonStart=document.querySelector(".js-btnStart"),btnFinal=document.querySelector(".js-resultFinal"),containerQuestions=document.querySelector(".js-containerQuestion"),containerPreQuestion=document.querySelector(".js-preQuestion");let rightAnswer,timeCounter,currentQuestionIndex=0,rightAnswers=0,wrongAnswers=0,time=10,startTime=!0;const questions=[[{Question:"¿Cómo se llama la hija de Rachel y Ross?",Answer:["Emma","Emily","Jane","Carla"],Id:"1"},{Question:"¿Dónde se grabÓ la serie de Friends?",Answer:["Los Ángeles","Nueva York","San Francisco","Chicago"],Id:"2"},{Question:"¿Qué personaje tiene un mono de amigo?",Answer:["Ross","Emily","Phoebe","Joey"],Id:"3"},{Question:"¿Quién es Rosita?",Answer:["Un sillón","Una amiga de Rachel","La mascota de Joey","La novia de Chandler"],Id:"4"},{Question:"¿Cuál es el nombre del restaurante temático de los años 1950 donde Mónica trabajaba como camarera?",Answer:["Diner Moondance","Marilyn y Audrey","Galaxia crepuscular","De Marvin"],Id:"5"},{Question:"¿Qué trabajo tiene Ross?",Answer:["Paleontólogo","Vendedor de seguros","Artist","Fotografía"],Id:"6"},{Question:"¿Cuál es el segundo nombre de Chandler?",Answer:["Muriel","Jason","Kim","Zachary"],Id:"7"},{Question:"¿A quién se dirigía siempre la revista de televisión de Chandler?",Answer:["Chanandler Bong","Chanandler Bang","Chanandler Bing","Chanandler Beng"],Id:"8"},{Question:"¿Quién cantó el tema de Friends?",Answer:["Los Rembrandts","El Banksys","Los alguaciles","La banda de Da Vinci"],Id:"9"},{Question:"¿Cómo se llama el gato Sphynx de Rachel?",Answer:["Sra. Whiskerson","Baldy","Sra. Sid","Sra. Wheasy"],Id:"10"}],[{Question:"¿Cuáles son las iniciales del club de motos?",Answer:["SoA","SONS","SAMCRO","SamCro"],Id:"1"},{Question:"¿En qué pueblo de California se desarrolla la serie?",Answer:["Charming","San Francisco","Albuquerque","San Diego"],Id:"2"},{Question:"¿Cómo se llaman los dos hijos de Jaxs Teller?",Answer:["Abel y Thomas","Abel y Jackson","Adam y Thomas","Jacks y Abel"],Id:"3"},{Question:"¿Qué significa SAMCRO?",Answer:["Sons of Anarchy Motorcycle Club Redwood Original","Sons of Anarchy Motorcycle Club Red Original","Sons of Anarchy Motorcycle Club Roadway Original","Sons of Anarchy Motorcycle Club Redwood Origin"],Id:"4"},{Question:"¿Quién lleva un tatuaje en el que pone `I die I kill for my family`?",Answer:["Happy","Bobby","Opie","Tig Trager"],Id:"5"},{Question:"¿Cómo se llama el padre de Jackson Teller?",Answer:["John Teller","Jackson Teller","Joey Teller","Jade Teller"],Id:"6"},{Question:"¿Quién es el mejor cantante del grupo?",Answer:["Bobby","Juice","Clay","Filip"],Id:"7"},{Question:"Los Sons se dedican al....",Answer:["Tráfico de armas","Tráfico de hombres y mujeres","Tráfico de motos y coches robados","Tráfico de droga"],Id:"8"},{Question:"¿Cuál es el mayor temor de Tig?",Answer:["Las muñecas","Los perros","Los gatos","Las arañas"],Id:"9"},{Question:"¿Cuál es la moto de Jax?",Answer:["2003 Harley-Davidson Dyna Super Glide Sport","Harley Davidson Softail Fat Boy","Harley Davidson Iron 883","2003 Harley-Davidson Dyna"],Id:"10"}],[{Question:"¿Cuál es la secuencia de números que tienen que introducir en el ordenador para salvar el mundo?",Answer:["4-8-15-16-23-42","4-8-15-16-25-42","4-8-11-16-23-42","4-8-15-16-23-40"],Id:"1"},{Question:"¿Cuál es el verdadero nombre de Sawyer?",Answer:["James Ford","James Sawyer","Jack Sawyer","Sam Ford"],Id:"2"},{Question:"¿Qué avión se estrelló en la isla en el primer capítulo?",Answer:["Vuelo 815 de Oceanic","Avión intercontinental Oceanic","Vuelo B5-845","Vuelo 54-8545"],Id:"3"},{Question:"¿En qué estación dharma había que pulsar la tecla?",Answer:["El Cisne","El Espejo","La Perla","El Fuego"],Id:"4"},{Question:"¿Qué se encontraron en la avioneta del hermano de Eko?",Answer:["Estatuillas con heroína","Armas","Suministros y alimentos","Componentes electrónicos"],Id:"5"},{Question:"¿Que és ese humo negro que le llaman 'El Monstruo'?",Answer:["Un Sistema de Seguridad que aguarda en 'El Templo'","Una nube contaminada, llena de sonidos y catastrofes naturales","El Espiritu de Jacob","Un monstruo que se maneja a traves de la mente"],Id:"6"},{Question:"¿A quien elije Jacob para que salve la Isla? ",Answer:["John Locke","Jack Sephard","Hurley","Benjamin Linus"],Id:"7"},{Question:"¿Quien acabó con los miembros de la 'Iniciativa Dharma'?",Answer:["Benjamin Linus","Daniel Faraday","Ethan","Richard Alpert"],Id:"8"},{Question:"¿Quien és el principal invocador de 'El Monstruo'?",Answer:["Benjamin Linus","Richard Alpert","Jacob","Nadie"],Id:"9"},{Question:"¿Cuáles son las últimas palabras de Charlie en la serie?",Answer:["No es el barco de Penny","Cuidado, detrás de ti","Porque tendrás que ser tú, Jack","Soy tu hijo"],Id:"10"}],[{Question:"¿Cuándo descubre Walter White que Jesse Pinkman cocina metanfetaminas?",Answer:["Cuando Jesse estaba en el instituto","En un redada de la DEA","Cuando Walt quiere comprar marihuana","Cuando el hijo de Walt quiere pillar marihuana"],Id:"1"},{Question:"¿Cómo consigue Heisenberg que Tuco le pague lo que le debe?",Answer:["Hace explotar su oficina con un compuesto químico que parece cristal","Manda a Jesse a que le pegue una paliza","Mata a Tuco","Se lo pide por favor"],Id:"2"},{Question:"¿Cómo corta lazos con el cártel de México Gus Fring?",Answer:["Porque mató a su mejor amigo","Porque es un soplón","Porque le robó la mujer","Porque intento acabar con su vida"],Id:"3"},{Question:"¿Cómo acaba Heisenberg con Gus Fring?",Answer:["Se alía con don Salamanca para hacerlo volar por los aires","No lo mata, consiguen firmar la paz","Le envenena con ricina","Contrata a un sicario para que se encargue de él"],Id:"4"},{Question:"¿Muere alguien durante toda la serie gracias al ricina?",Answer:["Lydia, la que les consigue la metilamina","Mike","Tuco Salamanca","No, están toda la serie con el ricina p'arriba y el ricina p'abajo y nunca lo usan"],Id:"5"},{Question:"¿Qué familiar de Walt muere por su culpa?",Answer:["Hank","Skyler","Holy.","Walter Jr"],Id:"6"},{Question:"¿Cuál es el famoso anuncio de Saul Goodman? ",Answer:["Better Call Saul!","I can make it legal","Call risk, free now","Saul Goodman"],Id:"7"},{Question:"¿Cuál es el primer trabajo que Walt y Jesse ordenan a Saul?",Answer:["Evin","Daniel Faraday","Ethan","Richard Alpert"],Id:"8"},{Question:"¿Cuánto dinero tenía Walter cuándo se salió del negocio??",Answer:["80 millones","10 millones","40 millones","Nada"],Id:"9"},{Question:"¿Qué droga no consume Jesse en la serie?",Answer:["Éxtasis","Heroína","Marihuana","Metanfetaminas"],Id:"10"}],[{Question:"¿Cuál era la misión de Olivia al inicio del primer episodio",Answer:["Resolver el caso de un avión estrellado","Resolver el caso de un asesinato","Resolver el caso de un mounstruo","Resolver el caso de un robo"],Id:"1"},{Question:"¿Como se llama la vaca de Walter?",Answer:["Gene","Cower","Moly","Paty"],Id:"2"},{Question:"¿Cómo se llama la droga favorita de Walter?",Answer:["Brown Betty / LSD","Marihuana","Anfetaminas","Heroína"],Id:"3"},{Question:"¿Cuántos años pasó Walter en la institución mental?",Answer:["17","25","10","5"],Id:"4"},{Question:"¿Como se llama la hija de Olivia y Peter?",Answer:["Etta","Vicky","Rachel","Sammi"],Id:"5"},{Question:"¿En que universidad está el laboratorio de Walter?",Answer:["Universidad de Harvard","Universidad de Nueva York","Universidad del Sur de California","Universidad de San Diego"],Id:"6"},{Question:"¿En que ciudad transcurre la serie?",Answer:["Boston","Los Ángeles","Chicago","Nueva York"],Id:"7"},{Question:"¿De qué color eran los destellos del otro lado cuando Olivia recuerda su conversación con William en las torres gemelas?",Answer:["Amarillentos","Azules","Verdes","Rojizos"],Id:"8"},{Question:"¿Para qué sirve el ambar 31422 en el universo alternativo?",Answer:["Para poner en cuarentena un lugar concreto","Para curar a los infectados","Para revivir a los muertos","Para matar"],Id:"9"},{Question:"¿Qué enfermedad que ya desapareció en nuestro mundo aún existe en el universo alternativo?",Answer:["Viruela","Polio","Rubéola","Tetanos"],Id:"10"}],[{Question:"¿Cómo se llamó el perro de Charlotte?",Answer:["Elizabeth Taylor","Miss Molly","Princess","Jacqueline Kennedy Onassis"],Id:"1"},{Question:"¿Con qué frase se insinuó un hombre vestido con un traje de sándwich a Miranda mientras caminaba?",Answer:["Cómeme","¿Cómo te llamas?","¡Obtenga sus sándwich aquí!","¿Qué quieres comer?"],Id:"2"},{Question:"¿Cuál de las cuatro chicas fue dejada plantada por todas sus amigas en un restaurante en su cumpleaños?",Answer:["Carrie","Samantha","Miranda","Charlotte"],Id:"3"},{Question:"¿En qué se ganaba la vida el novio de Carrie, Aidan?",Answer:["Tenía una tienda de muebles","Periodista","Desempleado","Abogado"],Id:"4"},{Question:"¿Cómo se llamaba la madre de Trey MacDougal?",Answer:["Bunny","Betty","Betsy","Barbara"],Id:"5"},{Question:"¿Cuál de los siguientes NO era uno de los novios de Miranda?",Answer:["Stanford","Skipper","Robert","Steve"],Id:"6"},{Question:"¿Cuál era el verdadero nombre de Smith Jerrod al que Samantha se oponía? ",Answer:["Jerry","Jonh","James","Jack"],Id:"7"},{Question:"¿Cuál es el nombre real de Mr.Big?",Answer:["John","Peter","James","Robert"],Id:"8"},{Question:"¿Dónde conoció Charlotte a su futuro esposo Harry Goldenblatt?",Answer:["En la oficina de su abogado de divorcios","En una cafetería","En la iglesia","En un restaurante"],Id:"9"},{Question:"¿Cómo se llama el periódico para el cuál escribe Carrie?",Answer:["The New York Star","The New York Womam","The New York Times","The New York Post"],Id:"10"}]];function timeEachQuestion(){time=10,clearInterval(timeCounter),document.querySelector(".quiz--counterTime").innerHTML=time,timeCounter=setInterval(()=>{let e=document.querySelector(".quiz--counterTime");time--,e.innerHTML=time,0==time&&(alert("Has perdido"),clearInterval(timeCounter),location.reload())},1e3)}function pressToInitialQuestion(){console.log("object"),containerPreQuestion.style.display="none",containerQuestions.style.display="flex"}const printHtmlQuestionsFriends=e=>{timeEachQuestion(),currentQuestionIndex++;const n=questions[0][e],s=document.querySelector(".friends--container");let o=n.Answer;rightAnswer=o[0],a=o.sort((e,n)=>Math.floor(3*Math.random())-1);const r=a.map(e=>`<h3 class="quiz--containerAnswer"><button class="friends--btn" onClick="answerOk('${e}', this)">X</button><span class="friends--answer">${e}</span></h3>`).join(" ");s.innerHTML=`<h1 class="friends--question">${n.Question}</h1><div>${r}</div>`,10==n.Id&&(btnFinal.style.display="flex"),answerOk()},answerOk=(e,n)=>{const a=document.querySelector(".quiz--plusCounter"),s=document.querySelector(".quiz--lessCounter");document.querySelectorAll(".quiz--containerAnswer").forEach(e=>e.classList.remove("right","wrong"));const o=n.parentNode;console.log(rightAnswer),e==rightAnswer?(clearInterval(timeCounter),o.classList.add("right"),rightAnswers++,a.innerHTML=`<h4 class="counter-question">Correctas: ${rightAnswers}</h4>`):(o.classList.add("wrong"),wrongAnswers++,s.innerHTML=`<h4 class="counter-question">Incorrectas: ${wrongAnswers}</h4>`)},endGame=()=>{clearInterval(timeCounter);const e=document.querySelector(".quiz--result");rightAnswers>wrongAnswers?e.innerHTML=`<p class="result-final">Has ganado! Has acertado: ${rightAnswers} pregunta/as y  has fallado: ${wrongAnswers} pregunta/as</p>`:rightAnswers<wrongAnswers?e.innerHTML=`<p class="result-final">Vuelve a intentarlo! Has acertado: ${rightAnswers} pregunta/as y has fallado: ${wrongAnswers} pregunta/as</p>`:rightAnswers==wrongAnswers&&(e.innerHTML=`<p class="result-final">Has acertado: ${rightAnswers} pregunta/as y has fallado: ${wrongAnswers} pregunta/as</p>`)};btnFinal.addEventListener("click",endGame),buttonStart.addEventListener("click",pressToInitialQuestion);const printHtmlQuestionsNy=e=>{timeEachQuestion(),currentQuestionIndex++;const n=questions[5][e],s=document.querySelector(".ny--container");let o=n.Answer;rightAnswer=o[0],a=o.sort((e,n)=>Math.floor(3*Math.random())-1);const r=a.map(e=>`<h3 class="quiz--containerAnswer"><button class="ny--btn" onClick="answerOk('${e}', this)">X</button><span class="ny--answer">${e}</span></h3>`).join(" ");s.innerHTML=`<h1 class="ny--question">${n.Question}</h1><div>${r}</div>`,10==n.Id&&(btnFinal.style.display="flex"),answerOk()},printHtmlQuestionsSons=e=>{timeEachQuestion(),currentQuestionIndex++;const n=questions[1][e],s=document.querySelector(".sons--container");let o=n.Answer;rightAnswer=o[0],console.log(questions[1][0]),a=o.sort((e,n)=>Math.floor(3*Math.random())-1);const r=a.map(e=>`<h3 class="quiz--containerAnswer"><button class="sons--btn" onClick="answerOk('${e}', this)">X</button><span class="sons--answer">${e}</span></h3>`).join(" ");s.innerHTML=`<h1 class="sons--question">${n.Question}</h1><div>${r}</div>`,10==n.Id&&(btnFinal.style.display="flex"),answerOk()};