function validate() {
  var isValid = true;
  var form1 = document.getElementById('form1');

  var get_slot_value = document.getElementById("number_of_slots").value;
  console.log(get_slot_value);

  if (form1.number_of_slots.value == '') {
    isValid = false;
  }

  if (get_slot_value == 1) {
    console.log(10);
    if (isValid) {
      // document.getElementById('form2').style.display='block';
      document.getElementById('form1').style.display = 'none';

      document.getElementById('secondstep').innerHTML = "<form id = \"form2\" method = \"post\" >\n" +
        "    <table class = \"tbl2\">\n" +
        "    <tr>\n" +
        "    <td> Enter The Define Slot Id's * </td></tr>\n" +
        "    <tr><td> <input type = \"text\" name = \"Define_Slot_1\" id=\"Define_Slot_1\" class = \"Define_Slot_1\" required> </td></tr>\n" +
        "    <tr>\n" +
        "    <tr><td>   <button id = \"btn1\" onClick=\"return thirdstep();\" >Next Step</button></td></tr>\n" +
        "    </table>\n" +
        "</form>"
      
      return false;
    }
  } else if (get_slot_value == 2) {
    if (isValid) {
      // document.getElementById('form2').style.display='block';
      document.getElementById('form1').style.display = 'none';

      document.getElementById('secondstep').innerHTML = "<form id = \"form2\" method = \"post\" >\n" +
        "    <table class = \"tbl2\">\n" +
        "    <tr>\n" +
        "    <td> Enter The Define Slot Id's * </td></tr>\n" +
        "    <tr><td> <input type = \"text\" name = \"Define_Slot_1\" class = \"Define_Slot_1\" id=\"Define_Slot_1\" required> </td></tr>\n" +
        "    <tr>\n" +
        "    <tr><td> <input type = \"text\" name = \"Define_Slot_2\" class = \"Define_Slot_2\" id=\"Define_Slot_2\" required> </td></tr>\n" +
        "    <tr>\n" +
        "    <tr><td>   <button id = \"btn1\" onClick=\"return thirdstep();\" >Next Step</button></td></tr>\n" +
        "    </table>\n" +
        "</form>"

      return false;
    }
  } else if (get_slot_value == 3) {
    if (isValid) {
      // document.getElementById('form2').style.display='block';
      document.getElementById('form1').style.display = 'none';

      document.getElementById('secondstep').innerHTML = "<form id = \"form2\" method = \"post\" >\n" +
        "    <table class = \"tbl2\">\n" +
        "    <tr>\n" +
        "    <td> Enter The Define Slot Id's * </td></tr>\n" +
        "    <tr><td> <input type = \"text\" name = \"Define_Slot_1\" class = \"Define_Slot_1\" id=\"Define_Slot_1\" required> </td></tr>\n" +
        "    <tr>\n" +
        "    <tr><td> <input type = \"text\" name = \"Define_Slot_2\" class = \"Define_Slot_2\" id=\"Define_Slot_2\" required> </td></tr>\n" +
        "    <tr>\n" +
        "    <tr><td> <input type = \"text\" name = \"Define_Slot_3\" class = \"Define_Slot_2\" id=\"Define_Slot_3\" required> </td></tr>\n" +
        "    <tr>\n" +
        "    <tr><td>   <button id = \"btn1\" onClick=\"return thirdstep();\" >Next Step</button></td></tr>\n" +
        "    </table>\n" +
        "</form>"

      return false;
    }
  } else if (get_slot_value == 4) {
    if (isValid) {
      // document.getElementById('form2').style.display='block';
      document.getElementById('form1').style.display = 'none';

      document.getElementById('secondstep').innerHTML = "<form id = \"form2\" method = \"post\" >\n" +
        "    <table class = \"tbl2\">\n" +
        "    <tr>\n" +
        "    <td> Enter The Define Slot Id's * </td></tr>\n" +
        "    <tr><td> <input type = \"text\" name = \"Define_Slot_1\" class = \"Define_Slot_1\" id=\"Define_Slot_1\" required> </td></tr>\n" +
        "    <tr>\n" +
        "    <tr><td> <input type = \"text\" name = \"Define_Slot_2\" class = \"Define_Slot_2\" id=\"Define_Slot_2\" required> </td></tr>\n" +
        "    <tr>\n" +
        "    <tr><td> <input type = \"text\" name = \"Define_Slot_3\" class = \"Define_Slot_2\" id=\"Define_Slot_3\" required> </td></tr>\n" +
        "    <tr>\n" +
        "    <tr><td> <input type = \"text\" name = \"Define_Slot_4\" class = \"Define_Slot_2\" id=\"Define_Slot_4\" required> </td></tr>\n" +
        "    <tr>\n" +
        "    <tr><td>   <button id = \"btn1\" onClick=\"return thirdstep();\" >Next Step</button></td></tr>\n" +
        "    </table>\n" +
        "</form>"

      return false;
    }
  } else if (get_slot_value == 5) {
    if (isValid) {
      // document.getElementById('form2').style.display='block';
      document.getElementById('form1').style.display = 'none';

      document.getElementById('secondstep').innerHTML = "<form id = \"form2\" method = \"post\" >\n" +
        "    <table class = \"tbl2\">\n" +
        "    <tr>\n" +
        "    <td> Enter The Define Slot Id's * </td></tr>\n" +
        "    <tr><td> <input type = \"text\" name = \"Define_Slot_1\" class = \"Define_Slot_1\" id=\"Define_Slot_1\" required> </td></tr>\n" +
        "    <tr>\n" +
        "    <tr><td> <input type = \"text\" name = \"Define_Slot_2\" class = \"Define_Slot_2\" id=\"Define_Slot_2\" required> </td></tr>\n" +
        "    <tr>\n" +
        "    <tr><td> <input type = \"text\" name = \"Define_Slot_3\" class = \"Define_Slot_2\" id=\"Define_Slot_3\" required> </td></tr>\n" +
        "    <tr>\n" +
        "    <tr><td> <input type = \"text\" name = \"Define_Slot_4\" class = \"Define_Slot_2\" id=\"Define_Slot_4\" required> </td></tr>\n" +
        "    <tr>\n" +
        "    <tr><td> <input type = \"text\" name = \"Define_Slot_5\" class = \"Define_Slot_2\" id=\"Define_Slot_5\" required> </td></tr>\n" +
        "    <tr>\n" +
        "    <tr><td>   <button id = \"btn1\" onClick=\"return thirdstep();\" >Next Step</button></td></tr>\n" +
        "    </table>\n" +
        "</form>"

      return false;
    }
  } else if (get_slot_value == 6) {
    if (isValid) {
      // document.getElementById('form2').style.display='block';
      document.getElementById('form1').style.display = 'none';

      document.getElementById('secondstep').innerHTML = "<form id = \"form2\" method = \"post\" >\n" +
        "    <table class = \"tbl2\">\n" +
        "    <tr>\n" +
        "    <td> Enter The Define Slot Id's * </td></tr>\n" +
        "    <tr><td> <input type = \"text\" name = \"Define_Slot_1\" class = \"Define_Slot_1\" id=\"Define_Slot_1\" required> </td></tr>\n" +
        "    <tr>\n" +
        "    <tr><td> <input type = \"text\" name = \"Define_Slot_2\" class = \"Define_Slot_2\" id=\"Define_Slot_2\" required> </td></tr>\n" +
        "    <tr>\n" +
        "    <tr><td> <input type = \"text\" name = \"Define_Slot_3\" class = \"Define_Slot_3\" id=\"Define_Slot_3\" required> </td></tr>\n" +
        "    <tr>\n" +
        "    <tr><td> <input type = \"text\" name = \"Define_Slot_4\" class = \"Define_Slot_4\" id=\"Define_Slot_4\" required> </td></tr>\n" +
        "    <tr>\n" +
        "    <tr><td> <input type = \"text\" name = \"Define_Slot_5\" class = \"Define_Slot_5\" id=\"Define_Slot_5\" required> </td></tr>\n" +
        "    <tr>\n" +
        "    <tr><td> <input type = \"text\" name = \"Define_Slot_6\" class = \"Define_Slot_2\" id=\"Define_Slot_6\" required> </td></tr>\n" +
        "    <tr>\n" +
        "    <tr><td>   <button id = \"btn1\" onClick=\"return thirdstep();\" >Next Step</button></td></tr>\n" +
        "    </table>\n" +
        "</form>"

      return false;
    }
  } else if (get_slot_value == 7) {
    if (isValid) {
      // document.getElementById('form2').style.display='block';
      document.getElementById('form1').style.display = 'none';

      document.getElementById('secondstep').innerHTML = "<form id = \"form2\" method = \"post\" >\n" +
        "    <table class = \"tbl2\">\n" +
        "    <tr>\n" +
        "    <td> Enter The Define Slot Id's * </td></tr>\n" +
        "    <tr><td> <input type = \"text\" name = \"Define_Slot_1\" class = \"Define_Slot_1\" id=\"Define_Slot_1\" required> </td></tr>\n" +
        "    <tr>\n" +
        "    <tr><td> <input type = \"text\" name = \"Define_Slot_2\" class = \"Define_Slot_2\" id=\"Define_Slot_2\" required> </td></tr>\n" +
        "    <tr>\n" +
        "    <tr><td> <input type = \"text\" name = \"Define_Slot_3\" class = \"Define_Slot_2\" id=\"Define_Slot_3\" required> </td></tr>\n" +
        "    <tr>\n" +
        "    <tr><td> <input type = \"text\" name = \"Define_Slot_4\" class = \"Define_Slot_2\" id=\"Define_Slot_4\" required> </td></tr>\n" +
        "    <tr>\n" +
        "    <tr><td> <input type = \"text\" name = \"Define_Slot_5\" class = \"Define_Slot_2\" id=\"Define_Slot_5\" required> </td></tr>\n" +
        "    <tr>\n" +
        "    <tr><td> <input type = \"text\" name = \"Define_Slot_6\" class = \"Define_Slot_2\" id=\"Define_Slot_6\" required> </td></tr>\n" +
        "    <tr>\n" +
        "    <tr><td> <input type = \"text\" name = \"Define_Slot_7\" class = \"Define_Slot_2\" id=\"Define_Slot_7\" required> </td></tr>\n" +
        "    <tr>\n" +
        "    <tr><td>   <button id = \"btn1\" onClick=\"return thirdstep();\" >Next Step</button></td></tr>\n" +
        "    </table>\n" +
        "</form>"

      return false;
    }
  } else if (get_slot_value == 8) {
    if (isValid) {
      // document.getElementById('form2').style.display='block';
      document.getElementById('form1').style.display = 'none';

      document.getElementById('secondstep').innerHTML = "<form id = \"form2\" method = \"post\" >\n" +
        "    <table class = \"tbl2\">\n" +
        "    <tr>\n" +
        "    <td> Enter The Define Slot Id's * </td></tr>\n" +
        "    <tr><td> <input type = \"text\" name = \"Define_Slot_1\" class = \"Define_Slot_1\" id=\"Define_Slot_1\" required> </td></tr>\n" +
        "    <tr>\n" +
        "    <tr><td> <input type = \"text\" name = \"Define_Slot_2\" class = \"Define_Slot_2\" id=\"Define_Slot_2\" required> </td></tr>\n" +
        "    <tr>\n" +
        "    <tr><td> <input type = \"text\" name = \"Define_Slot_3\" class = \"Define_Slot_3\" id=\"Define_Slot_3\" required> </td></tr>\n" +
        "    <tr>\n" +
        "    <tr><td> <input type = \"text\" name = \"Define_Slot_4\" class = \"Define_Slot_4\" id=\"Define_Slot_4\" required> </td></tr>\n" +
        "    <tr>\n" +
        "    <tr><td> <input type = \"text\" name = \"Define_Slot_5\" class = \"Define_Slot_5\" id=\"Define_Slot_5\" required> </td></tr>\n" +
        "    <tr>\n" +
        "    <tr><td> <input type = \"text\" name = \"Define_Slot_6\" class = \"Define_Slot_6\" id=\"Define_Slot_6\" required> </td></tr>\n" +
        "    <tr>\n" +
        "    <tr><td> <input type = \"text\" name = \"Define_Slot_7\" class = \"Define_Slot_7\" id=\"Define_Slot_7\" required> </td></tr>\n" +
        "    <tr>\n" +
        "    <tr><td> <input type = \"text\" name = \"Define_Slot_8\" class = \"Define_Slot_8\" id=\"Define_Slot_8\" required> </td></tr>\n" +
        "    <tr>\n" +
        "    <tr><td>   <button id = \"btn1\" onClick=\"return thirdstep();\" >Next Step</button></td></tr>\n" +
        "    </table>\n" +
        "</form>"

      return false;
    }
  } else {
    if (isValid) {
      document.getElementById('form1').style.display = 'none';
      document.getElementById('secondstep').innerHTML = "Enter a number between 1 to 8"
      console.log("Enter A Valid Value");

      return false;
    }

  }


}

function thirdstep() {
  var isValid = true;
  var form2 = document.getElementById('form2');



    // var slot1 =
    // var slot2 = document.getElementById("Define_Slot_2");
    // var slot3 = document.getElementById("Define_Slot_3");
    // var slot4 = document.getElementById("Define_Slot_4");
    // var slot5 = document.getElementById("Define_Slot_5");
    // var slot6 = document.getElementById("Define_Slot_6");
    // var slot7 = document.getElementById("Define_Slot_7");
    // var slot8 = document.getElementById("Define_Slot_8");
    //
    //     sessionStorage.setItem("Define_Slot_1", slot1);
    //     sessionStorage.setItem("Define_Slot_2", slot2);
    //     sessionStorage.setItem("Define_Slot_3", slot3);
    //     sessionStorage.setItem("Define_Slot_4", slot4);
    //     sessionStorage.setItem("Define_Slot_5", slot5);
    //     sessionStorage.setItem("Define_Slot_6", slot6);
    //     sessionStorage.setItem("Define_Slot_7", slot7);
    //     sessionStorage.setItem("Define_Slot_8", slot8);

  if (form2.Define_Slot_1.value == '') {
    isValid = false;
  }

  if (isValid) {
    // document.getElementById('form2').style.display='block';
    document.getElementById('form2').style.display = 'none';
    console.log("3rd step");
    document.getElementById('secondstep').innerHTML = "<form id=\"form3\" method=\"post\">\n" +
      "\n" +
      "  <select name=\"Tag_type\" name='tagtype' id=\"Tag_Type\">\n" +
      "    <option value=\"Responsive\">Responsive</option>\n" +
      "    <option value=\"Refresh_Responsive\">Refresh And Responsive</option>\n" +
      "    <option value=\"Interstitial_ad\">Intersitital</option>\n" +
      "    <option value=\"Anchor\">Anchor</option>\n" +
      "    <option value=\"Refresh\">Refresh</option>\n" +
      "  </select>\n" +
      "  <button id=\"btn\" onClick=\"return fourthstep();\">Next Step</button>\n" +
      "</form>"

    return false;
  }
}


function fourthstep() {
  var select = document.querySelector("#Tag_Type").value;
  console.log(select);
  document.getElementById('form3').style.display = 'none';


  if (select == "Responsive") {
    document.getElementById('secondstep').innerHTML = "<form id=\"form4\" method=\"post\">\n" +
      "\n" +
      "  <table class=\"tbl\">\n" +
      "    <tr><td> Desktop Size : <input type = \"text\" name = \"Desktop\" id=\"Desktop_Size\" class = \"Define_Slot_7\" required> </td></tr>\n" +
      "    <tr>\n" +
      "    <tr><td> Mobile Size : <input type = \"text\" name = \"Mobile\" id=\"Mobile_Size\" class = \"Define_Slot_7\" required> </td></tr>\n" +
      "    <tr>\n" +
      "    <tr><td> Tablet Size : <input type = \"text\" name = \"Tablet\" id=\"Tablet_Size\" class = \"Define_Slot_7\" required> </td></tr>\n" +
      "    <tr>\n" +
      "      <td>\n" +
      "        <button id=\"btn\" type=\"submit\" onClick=\"return fifthstep();\">Next Step</button>\n" +
      "      </td>\n" +
      "    </tr>\n" +
      "  </table>\n" +
      "</form>";
    sessionStorage.setItem("Select", select);
  } else if (select == "Refresh_Responsive") {
    document.getElementById('secondstep').innerHTML = "<form id=\"form4\" method=\"post\">\n" +
      "\n" +
      "  <table class=\"tbl\">\n" +
      "    <tr><td> Desktop Size : <input type = \"text\" name = \"Desktop\" id=\"Desktop_Size\" class = \"Define_Slot_7\" required> </td></tr>\n" +
      "    <tr>\n" +
      "    <tr><td> Mobile Size : <input type = \"text\" name = \"Mobile\" id=\"Mobile_Size\" class = \"Define_Slot_7\" required> </td></tr>\n" +
      "    <tr>\n" +
      "    <tr><td> Tablet Size : <input type = \"text\" name = \"Tablet\" id=\"Tablet_Size\" class = \"Define_Slot_7\" required> </td></tr>\n" +
      "    <tr>\n" +
      "      <td> Let's refresh the ad after second : <input type=\"number\" name=\"Refresh_Second\" id=\"Refresh_Second\" class=\"get_slot\" required></td>\n" +
      "    </tr>\n" +
      "    <tr>\n" +
      "      <td>\n" +
      "        <button id=\"btn\" type=\"submit\" onClick=\"return fifthstep();\">Next Step</button>\n" +
      "      </td>\n" +
      "    </tr>\n" +
      "  </table>\n" +
      "</form>";
    sessionStorage.setItem("Select", select);
  } else if (select == "Interstitial_ad") {
    document.getElementById('form4').style.display = 'none';
    document.getElementById('secondstep').innerHTML = "We are building the Next Step";
    sessionStorage.setItem("Select", select);
  } else if (select == "Anchor") {
    document.getElementById('form4').style.display = 'none';
    document.getElementById('secondstep').innerHTML = "We are building the Next Step";
    sessionStorage.setItem("Select", select);

  } else if (select == "Refresh") {
    document.getElementById('secondstep').innerHTML = "<form id=\"form4\" method=\"post\">\n" +
      "\n" +
      "  <table class=\"tbl\">\n" +
      "    <tr>\n" +
      "      <td> Let's refresh the ad after second : <input type=\"number\" name=\"Refresh_Second\" id=\"Refresh_Second\" class=\"get_slot\" required></td>\n" +
      "    </tr>\n" +
      "    <tr>\n" +
      "      <td>\n" +
      "        <button id=\"btn\" type=\"submit\" onClick=\"return fifthstep();\">Next Step</button>\n" +
      "      </td>\n" +
      "    </tr>\n" +
      "  </table>\n" +
      "</form>";
    sessionStorage.setItem("Select", select);
  } else {
    console.log("The options are not matching");
  }

}

function fifthstep() {
  var adtype = sessionStorage.getItem("Select");

  if (adtype == "Responsive") {

  } else if (adtype == "Refresh_Responsive") {

  } else if (adtype == "Interstitial_ad") {

  } else if (adtype == "Anchor") {

  } else if (adtype == "Refresh") {

  }


  document.getElementById('form4').style.display = 'none';
  document.getElementById('secondstep').innerHTML = "We are building the Next Step";
}
