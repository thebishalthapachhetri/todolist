/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {

    $("#add_task_button").click(addTask);
    $(document).on("click", ".destroy", deleteTask);
    $(document).on("click", ".toggle", markItemCompleted);
    $("#chk_completed").click(MarkTaskCompleted);
    




}
/*************event ******************/
function onPause() {
    alert("app paused");
  }


function onResume() {
    alert("app resumed");
 }
//----------------------------------------------------------------
 function addTask() {
    var $toDoList = $("#to_do_list");
  var $newTask = $("#txtnewtask");
  var AddListItem_prependString =
    '<li><input type="checkbox" id="toggle_task" class="toggle" /><span class="text">';
  var AddListItem_appendString =
    '</span><button class="destroy"></button></li>';
  $toDoList.append(
    AddListItem_prependString + $("#txtnewtask").val() + AddListItem_appendString
  );
  $newTask.val("");
    
  }
  
  function deleteTask() {
    $(this).closest("li").remove();
  }
  
  function markItemCompleted() {
    $(this).closest("li").toggleClass("completedItem");
  }
  
  
  
  


 
