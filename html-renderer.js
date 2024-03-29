<script>

// define the variables
var uid;
var publish_date;
var case_number; 
var chinese_address;
var english_address; 
var specific_start;  
var specific_end; 
var testing_date_number; 
var first_testing_start;  
var first_testing_end; 
var first_testing_indication; 
var second_testing_start; 
var second_testing_end;
var second_testing_indication; 
var third_testing_start; 
var third_testing_end;
var third_testing_indication; 


// Connect to Firebase Realtim Database
const db = getDatabase();

const compulsory_text = window.ref(db, 'Compulsory_Test');
onValue(compulsory_text, (snapshot) => {
    snapshot.forEach((childSnapshot) => {

        

        const childKey = childSnapshot.key;
        const childData = childSnapshot.val();

        var stringList = ["uid", "publish_date", "case_number", "chinese_address", "english_address", "specific_start", "specific_end","testing_date_number", "first_testing_start", "first_testing_end", "first_testing_indication", "second_testing_start", "second_testing_end", "second_testing_indication", "third_testing_start", "third_testing_end", "third_testing_indication"];
        var varList = [uid, publish_date, case_number, chinese_address, english_address, specific_start, specific_end, testing_date_number, first_testing_start, first_testing_end, first_testing_indication, second_testing_start, second_testing_end, second_testing_indication, third_testing_start, third_testing_end, third_testing_indication]; 

        childSnapshot.forEach((data) => {
            varList[stringList.indexOf(data.key)] = data.val();
        });

        
        var html = "";
        html += "<div class='ct-content-div'>";
            html += "<div class='ct-content-first-row'>";
                html += "<div class='ct-content-case-number-and-date'>";
                    html += "<div class='ct-content-case-number-div'>";
                        html += "<div id='publish_date' class='ct-content-large-published-date'>" + varList[1] + "</div>";
                    html += "</div>";
                html += "</div>";
                html += "<div class='ct-content-address'>";
                    html += "<h2 class='ct-content-chinese-address'>" + varList[3] + "</h2>";
                    html += "<h3 class='ct-content-english-chinese'>" + varList[4] + "</h3>";
                html += "</div>";
            html += "</div>";

            html += "<div class='ct-content-separated-line'></div>";
            html += "<div class='ct-content-second-row'>";
                html += "<div class='specific-date-header-div'>";
                    html += "<h4 class='ct-content-specific-date-heading'>指明期間及時段</h4>";
                    html += "<h5 class='ct-content-specific-date-description'>視情況而定任何一個 期間及時段)</h5>";
                html += "</div>";
                html += "<div class='specific-date-wrapper'>";
                    html += "<div class='specific-date-div'>";
                        html += "<div class='specific-date-heading-div'>";
                            html += "<h2 class='specific-date-heading'>" + varList[5] + "</h2>";
                            html += "<h2 class='specific-date-heading-description'>-</h2>";
                            html += "<h2 class='specific-date-heading'>" + varList[6] + "</h2>";
                        html += "</div>";
                        html += "<div class='specific-date-description'>(曾身處指明場所超過兩小時)</div>";
                    html += "</div>";
                html += "</div>";
            html += "</div>";

            html += "<div class='ct-content-separated-line'></div>";
            html += "<div class='ct-content-third-row'>";
                html += "<h4 class='ct-content-testing-dates-heading'>須進行檢測日期</h4>";
                html += "<div class='testing-date-flexbox'>";
                    html += "<div class='testing-date-div testing-date-1'>";
                        html += "<div class='testing-date-sub-heading'>第一次檢測日期</div>";
                        html += "<div class='testing-date-heading-div'>";
                            html += "<h2 class='testing-date-heading'>" + varList[8] + "</h2>";
                            html += "<h2 class='testing-date-heading-divider'>-</h2>";
                            html += "<h2 class='testing-date-heading'>" + varList[9] + "</h2>";
                            if(varList[10]== "Yes"){
                                html += "<div class='testing-date-indication'></div>";
                            } else {
                                html += "<div class='testing-date-indication w-condition-invisible'></div>";
                            }
                            
                        html += "</div>";
                    html += "</div>";
                    if(varList[11] == ""){
                        html += "<div class='testing-date-div testing-date-2 w-condition-invisible'>";
                    } else {
                        html += "<div class='testing-date-div testing-date-2'>";
                    }
                        html += "<div class='testing-date-sub-heading'>第二次檢測日期</div>";
                        html += "<div class='testing-date-heading-div'>";
                            html += "<h2 class='testing-date-heading'>" + varList[11] + "</h2>";
                            html += "<h2 class='testing-date-heading-divider'>-</h2>";
                            html += "<h2 class='testing-date-heading'>" + varList[12] + "</h2>";
                            if(varList[13]== "Yes"){
                                html += "<div class='testing-date-indication'></div>";
                            } else {
                                html += "<div class='testing-date-indication w-condition-invisible'></div>";
                            }
                        html += "</div>";
                    html += "</div>";
                    if(varList[14] == ""){
                        html += "<div class='testing-date-div testing-date-3 w-condition-invisible'>";
                    } else {
                        html += "<div class='testing-date-div testing-date-3'>";
                    }
                        html += "<div class='testing-date-sub-heading'>第三次檢測日期</div>";
                        html += "<div class='testing-date-heading-div'>";
                            html += "<h2 class='testing-date-heading'>" + varList[14] + "</h2>";
                            html += "<h2 class='testing-date-heading-divider'>-</h2>";
                            html += "<h2 class='testing-date-heading'>" + varList[15] + "</h2>";
                            if(varList[16]== "Yes"){
                                html += "<div class='testing-date-indication'></div>";
                            } else {
                                html += "<div class='testing-date-indication w-condition-invisible'></div>";
                            }
                        html += "</div>";
                    html += "</div>";
                html += "</div>";
            html += "</div>";


        html += "</div>";
        document.getElementById("ct-custom-flexbox").innerHTML += html;
        
    });
    
    document.getElementById("loading-spinner").style.display = "none";
});




</script>
