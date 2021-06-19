
       'use strict';    
    
function buildForm(mas,build){
   mas.forEach(item => {
    let signat = document.createTextNode('label');
    signat.textContent = item.label; 
    build.appendChild(signat); 
     
       if (item.kind == 'longtext'){
          let tag = document.createElement('input');
          tag.type = 'text';         
          build.appendChild(tag); 
          tag.name=item.name;
          let  linefeed = document.createElement('br');
          build.appendChild(linefeed);          
         };
       if (item.kind == 'number'){         
          let tag = document.createElement('input');
          tag.type = 'text'; 
          tag.name=item.name;      
          build.appendChild(tag); 
          let  linefeed = document.createElement('br');
          build.appendChild(linefeed); 
         };
        if (item.kind == 'shorttext'){           
          let tag = document.createElement('input');
          tag.type = 'email'; 
          tag.name=item.name;        
          build.appendChild(tag); 
          let  linefeed = document.createElement('br');
          build.appendChild(linefeed); 
         };
         if (item.kind == 'combo'){          
          let tag = document.createElement('select');
          tag.name=item.name;
          build.appendChild(tag); 
          let  linefeed = document.createElement('br');
          build.appendChild(linefeed);
          item.variants.forEach(itemCh => {
          let tagOption = document.createElement('option');
          tagOption.setAttribute('value', itemCh.value);
          tagOption.textContent = itemCh.text;
          tag.appendChild(tagOption);
           });
         };
         if (item.kind == 'radio'){
           item.variants.forEach(itemCh =>{
            let tag = document.createElement('input');
            tag.type = 'radio';
            tag.name=item.name;
            tag.setAttribute('value', itemCh.value);          
            let radioSpan=document.createElement('span');
            radioSpan.textContent=itemCh.text; 
            build.appendChild(tag);
            build.appendChild(radioSpan);
              }); 
            let  linefeed = document.createElement('br');
            build.appendChild(linefeed);                       
         };

         if (item.kind == 'check'){            
          let tag = document.createElement('input');
          tag.type = 'checkbox'; 
          tag.name=item.name;        
          build.appendChild(tag); 
          let  linefeed = document.createElement('br');
          build.appendChild(linefeed); 
         };

         if (item.kind == 'memo'){              
          let tag = document.createElement('textarea'); 
          tag.style.cssText = 'width: 400px; height: 40px';         
          tag.name=item.name;      
          build.appendChild(tag);
          let  linefeed = document.createElement('br');          
          build.appendChild(linefeed); 
         };

         if (item.kind == 'submit'){              
          let tag = document.createElement('input');
          tag.type = 'submit'; 
          tag.value = item.label;         
          build.appendChild(tag); 
          build.removeChild(signat);
          let  linefeed = document.createElement('br');          
          build.appendChild(linefeed);                    
          let  decor = document.createElement('div');
          decor.style.cssText = 'border: solid white 2px; height: 20px;';           
           build.appendChild(decor); 
         };

         } ); 
}  
$.ajax("form1.json",
            { type:'GET', dataType:'json', success:dataLoaded, error:errorHandler}
        );

function dataLoaded(data) {              
              
    buildForm(data, document.getElementById('form1'));     
    //запрос второй формы
    $.ajax("form2.json",
            { type:'GET', dataType:'json', success:dataLoaded, error:errorHandler}
        );
        function dataLoaded(data) {     
        buildForm(data, document.getElementById('form2'));
        }         
}

function errorHandler(jqXHR,statusStr,errorStr) {
    console.log(statusStr+' '+errorStr);
}            
   
  

 
  


     