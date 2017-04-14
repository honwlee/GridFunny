 const baseAPI = {
     extend: function(obj1, obj2) {
         for (const i in obj2) {
             if (obj2.hasOwnProperty(i)) {
                 obj1[i] = obj2[i];
             }
         }
         return obj1;
     },

     randColor: function() {
         const colors = [
             "#cfd9df", "#a1c4fd", "#8fd3f4", "#e6dee9", "#c3cfe2",
             "#a8edea", "#e0c3fc", "#ebbba7", "#fff1eb", "#accbee",
             "#c1dfc4", "#deecdd", "#fbfcdb", "#6a85b6", "#9face6",
             '#f35d4f', '#f36849', '#c0d988', '#6ddaf1', '#f1e85b'
         ];
         return colors[Math.floor(Math.random() * colors.length)];
     }
 }
 export default baseAPI;
