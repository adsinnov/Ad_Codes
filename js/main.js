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
        "    <tr><td> <input type = \"text\" name = \"Define_Slot_1\" class = \"Define_Slot_1\" required> </td></tr>\n" +
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
        "    <tr><td> <input type = \"text\" name = \"Define_Slot_1\" class = \"Define_Slot_1\" required> </td></tr>\n" +
        "    <tr>\n" +
        "    <tr><td> <input type = \"text\" name = \"Define_Slot_2\" class = \"Define_Slot_2\" required> </td></tr>\n" +
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
        "    <tr><td> <input type = \"text\" name = \"Define_Slot_1\" class = \"Define_Slot_1\" required> </td></tr>\n" +
        "    <tr>\n" +
        "    <tr><td> <input type = \"text\" name = \"Define_Slot_2\" class = \"Define_Slot_2\" required> </td></tr>\n" +
        "    <tr>\n" +
        "    <tr><td> <input type = \"text\" name = \"Define_Slot_3\" class = \"Define_Slot_2\" required> </td></tr>\n" +
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
        "    <tr><td> <input type = \"text\" name = \"Define_Slot_1\" class = \"Define_Slot_1\" required> </td></tr>\n" +
        "    <tr>\n" +
        "    <tr><td> <input type = \"text\" name = \"Define_Slot_2\" class = \"Define_Slot_2\" required> </td></tr>\n" +
        "    <tr>\n" +
        "    <tr><td> <input type = \"text\" name = \"Define_Slot_3\" class = \"Define_Slot_2\" required> </td></tr>\n" +
        "    <tr>\n" +
        "    <tr><td> <input type = \"text\" name = \"Define_Slot_4\" class = \"Define_Slot_2\" required> </td></tr>\n" +
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
        "    <tr><td> <input type = \"text\" name = \"Define_Slot_1\" class = \"Define_Slot_1\" required> </td></tr>\n" +
        "    <tr>\n" +
        "    <tr><td> <input type = \"text\" name = \"Define_Slot_2\" class = \"Define_Slot_2\" required> </td></tr>\n" +
        "    <tr>\n" +
        "    <tr><td> <input type = \"text\" name = \"Define_Slot_3\" class = \"Define_Slot_2\" required> </td></tr>\n" +
        "    <tr>\n" +
        "    <tr><td> <input type = \"text\" name = \"Define_Slot_4\" class = \"Define_Slot_2\" required> </td></tr>\n" +
        "    <tr>\n" +
        "    <tr><td> <input type = \"text\" name = \"Define_Slot_5\" class = \"Define_Slot_2\" required> </td></tr>\n" +
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
        "    <tr><td> <input type = \"text\" name = \"Define_Slot_1\" class = \"Define_Slot_1\" required> </td></tr>\n" +
        "    <tr>\n" +
        "    <tr><td> <input type = \"text\" name = \"Define_Slot_2\" class = \"Define_Slot_2\" required> </td></tr>\n" +
        "    <tr>\n" +
        "    <tr><td> <input type = \"text\" name = \"Define_Slot_3\" class = \"Define_Slot_3\" required> </td></tr>\n" +
        "    <tr>\n" +
        "    <tr><td> <input type = \"text\" name = \"Define_Slot_4\" class = \"Define_Slot_4\" required> </td></tr>\n" +
        "    <tr>\n" +
        "    <tr><td> <input type = \"text\" name = \"Define_Slot_5\" class = \"Define_Slot_5\" required> </td></tr>\n" +
        "    <tr>\n" +
        "    <tr><td> <input type = \"text\" name = \"Define_Slot_6\" class = \"Define_Slot_2\" required> </td></tr>\n" +
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
        "    <tr><td> <input type = \"text\" name = \"Define_Slot_1\" class = \"Define_Slot_1\" required> </td></tr>\n" +
        "    <tr>\n" +
        "    <tr><td> <input type = \"text\" name = \"Define_Slot_2\" class = \"Define_Slot_2\" required> </td></tr>\n" +
        "    <tr>\n" +
        "    <tr><td> <input type = \"text\" name = \"Define_Slot_3\" class = \"Define_Slot_2\" required> </td></tr>\n" +
        "    <tr>\n" +
        "    <tr><td> <input type = \"text\" name = \"Define_Slot_4\" class = \"Define_Slot_2\" required> </td></tr>\n" +
        "    <tr>\n" +
        "    <tr><td> <input type = \"text\" name = \"Define_Slot_5\" class = \"Define_Slot_2\" required> </td></tr>\n" +
        "    <tr>\n" +
        "    <tr><td> <input type = \"text\" name = \"Define_Slot_6\" class = \"Define_Slot_2\" required> </td></tr>\n" +
        "    <tr>\n" +
        "    <tr><td> <input type = \"text\" name = \"Define_Slot_7\" class = \"Define_Slot_2\" required> </td></tr>\n" +
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
        "    <tr><td> <input type = \"text\" name = \"Define_Slot_1\" class = \"Define_Slot_1\" required> </td></tr>\n" +
        "    <tr>\n" +
        "    <tr><td> <input type = \"text\" name = \"Define_Slot_2\" class = \"Define_Slot_2\" required> </td></tr>\n" +
        "    <tr>\n" +
        "    <tr><td> <input type = \"text\" name = \"Define_Slot_3\" class = \"Define_Slot_3\" required> </td></tr>\n" +
        "    <tr>\n" +
        "    <tr><td> <input type = \"text\" name = \"Define_Slot_4\" class = \"Define_Slot_4\" required> </td></tr>\n" +
        "    <tr>\n" +
        "    <tr><td> <input type = \"text\" name = \"Define_Slot_5\" class = \"Define_Slot_5\" required> </td></tr>\n" +
        "    <tr>\n" +
        "    <tr><td> <input type = \"text\" name = \"Define_Slot_6\" class = \"Define_Slot_6\" required> </td></tr>\n" +
        "    <tr>\n" +
        "    <tr><td> <input type = \"text\" name = \"Define_Slot_7\" class = \"Define_Slot_7\" required> </td></tr>\n" +
        "    <tr>\n" +
        "    <tr><td> <input type = \"text\" name = \"Define_Slot_8\" class = \"Define_Slot_8\" required> </td></tr>\n" +
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
      "    <option value=\"Interstitial\">Intersitital</option>\n" +
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
    document.getElementById('secondstep').innerHTML = "<form id=\"form3\" method=\"post\">\n" +
      "\n" +
      "  <table class=\"tbl\">\n" +
      "    <tr>\n" +
      "      <td> Enter The Screen Size *</td>\n" +
      "    </tr>\n" +
      "    <tr>\n" +
      "      <td> Desktop : <input type=\"text\" name=\"Desktop_size\" id=\"Desktop_size\" class=\"get_slot\" required></td>\n" +
      "    </tr>\n" +
      "    <tr>\n" +
      "      <td> Mobile : <input type=\"text\" name=\"Mobile_size\" id=\"Mobile_size\" class=\"get_slot\" required></td>\n" +
      "    </tr>\n" +
      "    <tr>\n" +
      "      <td> Tablet : <input type=\"text\" name=\"Tablet_size\" id=\"Tablet_size\" class=\"get_slot\" required></td>\n" +
      "    </tr>\n" +
      "    <tr>\n" +
      "      <td>\n" +
      "        <button id=\"btn\" onClick=\"return fifthstep();\">Next Step</button>\n" +
      "      </td>\n" +
      "    </tr>\n" +
      "  </table>\n" +
      "</form>";
  } else if (select == "Refresh_Responsive") {
    document.getElementById('secondstep').innerHTML = "<form id=\"form3\" method=\"post\">\n" +
      "\n" +
      "  <table class=\"tbl\">\n" +
      "    <tr>\n" +
      "      <td> Enter The Screen Size *</td>\n" +
      "    </tr>\n" +
      "    <tr>\n" +
      "      <td> Desktop : <input type=\"text\" name=\"Desktop_size\" id=\"Desktop_size\" class=\"get_slot\" required></td>\n" +
      "    </tr>\n" +
      "    <tr>\n" +
      "      <td> Mobile : <input type=\"text\" name=\"Mobile_size\" id=\"Mobile_size\" class=\"get_slot\" required></td>\n" +
      "    </tr>\n" +
      "    <tr>\n" +
      "      <td> Tablet : <input type=\"text\" name=\"Tablet_size\" id=\"Tablet_size\" class=\"get_slot\" required></td>\n" +
      "    </tr>\n" +
      "    <tr>\n" +
      "      <td> Let's refresh the ad after second : <input type=\"number\" name=\"Refresh_Second\" id=\"Refresh_Second\"\" class=\"get_slot\" required></td>\n" +
      "    </tr>\n" +
      "    <tr>\n" +
      "      <td>\n" +
      "        <button id=\"btn\" onClick=\"return fifthstep();\">Next Step</button>\n" +
      "      </td>\n" +
      "    </tr>\n" +
      "  </table>\n" +
      "</form>";
  } else if (select == "Interstitial") {
    console.log("It is a Interstitial");
  } else if (select == "Anchor") {
    console.log("It is a Anchor");
  } else if (select == "Refresh") {
    document.getElementById('secondstep').innerHTML = "<form id=\"form4\" method=\"post\">\n" +
      "\n" +
      "  <table class=\"tbl\">\n" +
      "    <tr>\n" +
      "      <td> Let's refresh the ad after second : <input type=\"number\" name=\"Refresh_Second\" id=\"Refresh_Second\"\" class=\"get_slot\" required></td>\n" +
      "    </tr>\n" +
      "    <tr>\n" +
      "      <td>\n" +
      "        <button id=\"btn\" onClick=\"return fifthstep();\">Next Step</button>\n" +
      "      </td>\n" +
      "    </tr>\n" +
      "  </table>\n" +
      "</form>";
  }

}

function fifthstep() {
  if (!document.getElementById("Refresh_Second").value) {
    var refresh = document.getElementById("Refresh_Second").value;
    console.log(refresh);
  }
  if (!document.getElementById("Desktop_size").value) {
    var Desktops_Size = document.getElementById("Desktop_size").value;
    console.log(Desktops_Size);
  }
  if (!document.getElementById("Mobile_size").value) {
    var Mobidfle_size = document.getElementById("Mobile_size").value;
    console.log(Mobidfle_size);
  }
  if (!document.getElementById("Tablet_size").value) {
    var Tablet_sdize = document.getElementById("Tablet_size").value;
    console.log(Tablet_sdize);
  }

  // document.getElementById("Refresh_Second").value;
  // document.getElementById("Desktop_size").value;
  // document.getElementById("Mobile_size").value;
  // document.getElementById("Tablet_size").value;
  document.getElementById('form4').style.display = 'none';
  document.getElementById('secondstep').innerHTML = "We are building the Next Step";


}
