const introCard = document.getElementById("intro-card");
const appCard1 = document.getElementById("app-card-1");
const appCard2 = document.getElementById("app-card-2");
const appCard3 = document.getElementById("app-card-3");

// errors
let hasFavDayErr = true;
let hasIgErr = true;
let hasGymErr = true;
let hasLiftSuppDaysErr = true;
let hasDyelErr = true;
let hasSquatErr = true;
let hasNameErr = true;
let hasEmailErr = true;
let hasPhoneErr = true;

// value of forms
const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const dyelYes = document.getElementById("dyelYes");
const dyelNo = document.getElementById("dyelNo");

// squat?
const squatYes = document.getElementById("squatYes");
const squatNo = document.getElementById("squatNo");
const legs = document.getElementById("favLegs");
const chest = document.getElementById("favChest");
const back = document.getElementById("favBack");
const arms = document.getElementById("favArms");
const shoulders = document.getElementById("favShoulders");

// const igYes = document.getElementById("igYes");
// const igNo = document.getElementById("igNo");

const gym24 = document.getElementById("gym24");
const gymPlanet = document.getElementById("gymPlanet");
const gymLVAC = document.getElementById("gymLVAC");
const gymEOS = document.getElementById("gymEOS");
const gymLifetime = document.getElementById("gymLifetime");
const gymOther = document.getElementById("gymOther");

const lift = document.getElementById("favLift");
const supp = document.getElementById("favSupplement");
const days = document.getElementById("daysInGym");

// next buttons

function goToContact() {
  introCard.classList.add("d-none");
  appCard1.classList.remove("d-none");
}

function goToCrit() {
  if (name.value == 0) {
    name.classList.add("is-invalid");
    appCard1.classList.remove("d-none");
  }
  if (email.value == 0) {
    email.classList.add("is-invalid");
    appCard1.classList.remove("d-none");
  }
  if (phone.value == 0) {
    phone.classList.add("is-invalid");
    appCard1.classList.remove("d-none");
  } else {
    name.classList.remove("is-invalid");
    email.classList.remove("is-invalid");
    phone.classList.remove("is-invalid");
    appCard1.classList.add("d-none");
    appCard2.classList.remove("d-none");
    hasNameErr = false;
    hasEmailErr = false;
    hasPhoneErr = false;
  }
}

function goToGeneral() {
  if (!dyelYes.checked && !dyelNo.checked) {
    document.getElementById("dyelError").classList.remove("d-none");
  } else {
    document.getElementById("dyelError").classList.add("d-none");
    hasDyelErr = false;
  }

  if (!squatYes.checked && !squatNo.checked) {
    document.getElementById("squatError").classList.remove("d-none");
  } else {
    document.getElementById("squatError").classList.add("d-none");
    hasSquatErr = false;
  }

  if (hasSquatErr === false && hasDyelErr === false) {
    appCard2.classList.add("d-none");
    appCard3.classList.remove("d-none");
  }
}

function sendIt() {
  let gymMemberships = $.map($('input[name="gymCheckbox"]:checked'), function (
    checked
  ) {
    return checked.value;
  });

  let user = $("#name").val();
  let userEmail = $("#email").val();
  let userPhone = $("#phone").val();
  let dyelRadio = $('input[name="dyelRadio"]:checked').val();
  let squatRadio = $('input[name="squatRadio"]:checked').val();
  let favDayRadio = $('input[name="favDayRadio"]:checked').val();
  let igRadio = $("#igRadio").val();
  let startDate = $("#start").val();
  let favLift = $("#favLift").val();
  let favSupplement = $("#favSupplement").val();
  let daysInGym = $("#daysInGym").val();
  let comments = $("textarea#comments").val();

  if (
    !legs.checked &&
    !chest.checked &&
    !back.checked &&
    !arms.checked &&
    !shoulders.checked
  ) {
    document.getElementById("favDayError").classList.remove("d-none");
  } else {
    document.getElementById("favDayError").classList.add("d-none");
    hasFavDayErr = false;
  }

  if (igRadio === "na") {
    document.getElementById("igError").classList.remove("d-none");
  } else {
    document.getElementById("igError").classList.add("d-none");
    hasIgErr = false;
  }

  if (
    !gym24.checked &&
    !gymPlanet.checked &&
    !gymLVAC.checked &&
    !gymEOS.checked &&
    !gymLifetime.checked &&
    !gymOther.checked
  ) {
    document.getElementById("gymError").classList.remove("d-none");
  } else {
    document.getElementById("gymError").classList.add("d-none");
    hasGymErr = false;
  }

  if (lift.value == 0) {
    lift.classList.add("is-invalid");
  }
  if (supp.value == 0) {
    supp.classList.add("is-invalid");
  }
  if (days.value == 0) {
    days.classList.add("is-invalid");
  } else {
    lift.classList.remove("is-invalid");
    supp.classList.remove("is-invalid");
    days.classList.remove("is-invalid");
    hasLiftSuppDaysErr = false;
  }

  if (
    hasFavDayErr === false &&
    hasIgErr === false &&
    hasGymErr === false &&
    hasLiftSuppDaysErr === false &&
    hasDyelErr === false &&
    hasSquatErr === false &&
    hasNameErr === false &&
    hasEmailErr === false &&
    hasPhoneErr === false
  ) {
    console.log(
      `Swole-mate info: \n
       Name: ${user} \n
       Email: ${userEmail} \n
       Phone: ${userPhone} \n
       DTEL?: ${dyelRadio} \n
       Do they squat?: ${squatRadio} \n
       Their favorite day: ${favDayRadio} \n
       Do they have a fitness IG?: ${igRadio} \n
       They have these gym memberships: ${gymMemberships} \n
       They are available for swole-mating: ${startDate} \n
       Their favorite lift: ${favLift} \n
       Their favorite supplement(s): ${favSupplement} \n
       Number of days they go to the gym: ${daysInGym} \n
       Additional comments: ${comments}
       `
    );
  }
}

// back buttons
function backToContact() {
  appCard2.classList.add("d-none");
  appCard1.classList.remove("d-none");
}

function backToCrit() {
  appCard3.classList.add("d-none");
  appCard2.classList.remove("d-none");
}
