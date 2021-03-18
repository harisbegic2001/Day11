var monitorsListArray = ["Apple","Peach","Berry"];
        function myMonitorsFunction(arr){
            var newMonitorsList = [...arr]
            var lista = [];
            var monitorsList = [];
            
            for(let i=0; i < newMonitorsList.length; i++){
                lista.push(newMonitorsList[i], i + 1)
                monitorsList.push(lista)
                lista=[]
            }
            
            

            return monitorsList
        }
console.log(myMonitorsFunction(monitorsListArray));
module.exports = myMonitorsFunction;