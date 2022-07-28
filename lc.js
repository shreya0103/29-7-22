
//Maximum Number of Words Found in Sentences

var mostWordsFound = function(s) {
     var m=0;
     for(var i=0;i<s.length;i++)
         {
             var temp=s[i],c=1;
             for(var j=0;j<temp.length;j++)
                 {
                     if(temp[j]==" ")
                         c++;
                 }
             m=Math.max(c,m);
         }
     return m;
     
 };



 //Remove All Adjacent Duplicates In String

 var removeDuplicates = function(s) {
     var st=[];
     for(var i=0;i<s.length;i++)
         {
             if(st.length!==0 && st[st.length-1]===s[i])
                 st.pop();
             else
             st.push(s[i]);
         }
     var str="";
     for(var i=0;i<st.length;i++)
         {
             str+=st[i];
         }
     return str;    
 };







