fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => chizish(json));

      const boxota=document.getElementById("box-ota");
      const input=document.getElementById("input");
      function chizish(malumot){
        boxota.innerHTML="";
        malumot.map((odam)=>{
            const div=document.createElement("box");
            div.classList.add("box");
            div.innerHTML=`
             <h1>${odam.name}</h1>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSteItzPyeDKBxyWiOA8xrPZXIlxOYv1b1VVg&s" alt="dff">
        <h2>${odam.email}</h2>
        <h3>${odam.phone}</h3>
        <h4>${odam.address.city}, ${odam.address.street}</h4>
            `
            boxota.appendChild(div);
        }
      )
      }

      

      input.addEventListener("input",()=>{
        const b=odam.filter(o=> o.name.toLowerCase().includes(input.value,toLowerCase()));
        chizish(b)
      })