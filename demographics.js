console.log('hello');
let isscrollbarvisible = true;
let scrollbarbutton = document.getElementsByClassName('modulescrollbar')[0].firstElementChild
let addcontactsecbutton = document.getElementById('addcontactsecbutton');
let addcontact = document.getElementsByClassName('detailssection')[0]
console.log(addcontact, addcontactsecbutton);


function changescrollbarstate() {
    document.getElementsByClassName('demographicsdetails')[0].style.transition = "flex 0.8s";
    if (isscrollbarvisible) {
        document.getElementsByClassName('patientbar')[0].style.flex = "7%";
        scrollbarbutton.className = "fa fa-chevron-right"
        document.getElementsByClassName('demographicsdetails')[0].style.flex = "380%";
    }
    else {
        document.getElementsByClassName('patientbar')[0].style.flex = "15%";
        scrollbarbutton.className = "fa fa-chevron-left"
        document.getElementsByClassName('demographicsdetails')[0].style.flex = "85%";
    }
    isscrollbarvisible = !isscrollbarvisible
}


function addcontactdetailsection() {
    const node = document.createElement("div");
    node.className="detailssection";
    // node.style.minWidth="40%";
    // node.style.margin="5px";
    // node.style.padding="2px";
    node.innerHTML=`<div class="details" ">
    <fieldset>
      <legend>
        <select
          name="Fee Schedule"
          id="Fee Schedule"
          style="width: 100px"
        >
          <option value="Home" selected>Home</option>
          <option value="Work">Work</option>
          <option value="Other">Other</option>
        </select>
      </legend>
      <div class="flexcol">
        <div class="address">
          <div class="flexcol">
            <div class="flexrow">
              <div style="flex: 95%">
                <p class="contacttitle">Address</p>
              </div>
              <div
                class="flexrow"
                style="align-items: center"
              >
                <i class="fa fa-trash"></i>
              </div>
            </div>
            <div class="flexcol">
              <div class="mt-10">
                <p class="addresstitles">Street</p>
              </div>
              <div>
                <input type="text" style="width: 70%" />
              </div>
              <div class="flexrow mt-10" style="width: 95%">
                <div class="flexcol" style="width: 25%">
                  <div>
                    <p class="addresstitles">Zip</p>
                  </div>
                  <div>
                    <input type="text" style="width: 90%" />
                  </div>
                </div>
                <div class="flexcol" style="width: 25%">
                  <div>
                    <p class="addresstitles">City</p>
                  </div>
                  <div>
                    <input type="text" style="width: 90%" />
                  </div>
                </div>
                <div class="flexcol" style="width: 25%">
                  <div>
                    <p class="addresstitles">State</p>
                  </div>
                  <div>
                    <select
                      name="State"
                      id="State"
                      style="width: 90%"
                    >
                      <option
                        value="none"
                        selected
                      ></option>
                    </select>
                  </div>
                </div>
                <div class="flexcol" style="width: 25%">
                  <div>
                    <p class="addresstitles">Country</p>
                  </div>
                  <div>
                    <select
                      name="Country"
                      id="Country"
                      style="width: 90%"
                    >
                      <option
                        value="none"
                        selected
                      ></option>
                    </select>
                  </div>
                </div>
                <div class="flexcol">
                  <div><i class="fa fa-trash"></i></div>
                  <div><p></p></div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <div class="phone">
          <div>
            <div class="flexrow">
              <div><p class="contacttitle">Phone</p></div>
              <div class="flexrow">
                <i class="fa fa-plus-circle paraicon"></i>
              </div>
            </div>
            <div class="flexrow" style="width: 90%">
              <div class="flexcol" style="width: 25%">
                <div><p class="addresstitles">Type</p></div>
                <div>
                  <select
                    name="Type"
                    id="Type"
                    style="width: 90%"
                  >
                    <option value="none" selected></option>
                  </select>
                </div>
              </div>
              <div class="flexcol" style="width: 25%">
                <div><p class="addresstitles">Code</p></div>
                <div>
                  <select
                    name="Code"
                    id="Code"
                    style="width: 90%"
                  >
                    <option value="none" selected></option>
                  </select>
                </div>
              </div>
              <div class="flexcol" style="width: 25%">
                <div>
                  <p class="addresstitles">Number</p>
                </div>
                <div>
                  <input type="text" style="width: 90%" />
                </div>
              </div>
              <div class="flexcol" style="width: 25%">
                <div class="flexrow" style="justify-content: flex-start;"><p class="addresstitles">Ext.</p></div>
                <div class="flexrow" style="justify-content: flex-end;">
                  <i class="fa fa-trash"></i>
                </div>
              </div>
            </div>
            <div class="flexrow"></div>
          </div>
        </div>
        <div class="fax">
          <div class="flexrow">
            <div><p class="contacttitle">Fax</p></div>
            <div class="flexrow">
              <i class="fa fa-plus-circle paraicon"></i>
            </div>
          </div>
        </div>
        <div class="email">
          <div class="flexrow">
            <div><p class="contacttitle">Email</p></div>
            <div class="flexrow">
              <i class="fa fa-plus-circle paraicon"></i>
            </div>
          </div>
          <div class="flexrow">
            <div style="flex: 90%" class="flexrow">
              <input type="text" style="width: 80%" />
              <div class="flexrow" style="margin-left: 4px;" ><i class="fa fa-trash"></i></div>
            </div>
            
          </div>
        </div>
        <div class="website">
          <div class="flexrow">
            <div class="flexrow">
              <p class="contacttitle">Website</p>
            </div>
            <div class="flexrow">
              <i
                class="fa fa-plus-circle paraicon flexrow"
              ></i>
            </div>
          </div>
        </div>
      </div>
    </fieldset>
  </div>`;
    // const textnode = document.createTextNode("Water");
    // node.appendChild(textnode);
    addcontact.appendChild(node)
}

scrollbarbutton.addEventListener("click", changescrollbarstate);
addcontactsecbutton.addEventListener("click", addcontactdetailsection);