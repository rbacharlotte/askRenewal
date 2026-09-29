// data.js

const responses = {
  password: {
    text: "Select which password you need to reset:",
    hasSubMenu: true,
    terminal: false
  },

  email: {
    text: `For email issues, contact Apex: 
          <a href="tel:18887228610" class="text-blue-600 underline">704-895-0010</a> option 7 / 
          <a href="https://rba.myportallogin.com/" target="_blank" class="text-blue-600 underline">ApexManage360 Portal</a>`,
    troubleshooting: [
      "Close Outlook all the way (click the X), wait a few seconds, then open it again.",
      "If that does not help, restart your computer and try Outlook one more time.",
      "If email still does not work, please contact Apex using the information below."
    ],
    turnaround: "Usually the same business day after you call or submit a ticket. Bigger mailbox changes can take 1–2 business days.",
    hasSubMenu: false,
    terminal: true
  },

  software: {
    text: "Please select the software from the dropdown:",
    hasSubMenu: true,
    terminal: false
  },

  hardware: {
    text: `Contact Internal IT or submit a ticket: <br> (Internal: Angel/Derrick), 
        <a href="https://forms.office.com/pages/responsepage.aspx?id=-nTBzeyRlE6TkRgmWfkrVlZS8BJzWy9Cpqewcx-rfglUQ0FSSFJETFg1WTEwTFBNTUJTMlpNTlZKUy4u&origin=lprLink&route=shorturl" target="_blank" class="text-blue-600 underline">Submit a ticket here</a>, <br>`,
    troubleshooting: [
      "Turn the device all the way off, wait about 30 seconds, then turn it back on.",
      "If it is a laptop, make sure the charger is plugged into the wall and into the computer.",
      "If a cord looks loose (keyboard, mouse, or monitor), gently push it in until it feels snug.",
      "If it still will not work, please reach out to Internal IT using the information below."
    ],
    turnaround: "Quick help is often the same business day. If something needs to be repaired or replaced, it can take 2–5 business days.",
    hasSubMenu: false,
    terminal: true
  },

  network: {
    text: `For network issues, contact Apex: 
          <a href="tel:18887228610" class="text-blue-600 underline">704-895-0010</a> option 7 / 
          <a href="https://rba.myportallogin.com/" target="_blank" class="text-blue-600 underline">ApexManage360 Portal</a>`,
    troubleshooting: [
      "Turn Wi‑Fi off, wait a few seconds, then turn it back on.",
      "Restart your computer (or phone, if that is what you are using).",
      "If the internet still does not work, please contact Apex using the information below."
    ],
    turnaround: "Often fixed the same business day. If the whole office is down, it can take a few hours up to 1 business day.",
    hasSubMenu: false,
    terminal: true
  },

  other: {
    text: `For all other issues, contact Apex: 
          <a href="tel:18887228610" class="text-blue-600 underline">704-895-0010</a> option 7 / 
          <a href="https://rba.myportallogin.com/" target="_blank" class="text-blue-600 underline">ApexManage360 Portal</a>`,
    troubleshooting: [
      "Close the program you were using, then open it again.",
      "If that does not help, restart your computer and try once more.",
      "If the problem is still there, please contact Apex using the information below. Tell them what you were trying to do."
    ],
    turnaround: "Someone usually gets back to you the same business day. Fixing the issue can take 1–3 business days.",
    hasSubMenu: false,
    terminal: true
  }
};

const softwareSupport = {
  "ms-365-apps": {
    text: `For MS365 Issues, contact Apex: 
        <a href="tel:18887228610" class="text-blue-600 underline">704-895-0010</a> option 7 / 
        <a href="https://rba.myportallogin.com/" target="_blank" class="text-blue-600 underline">ApexManage360 Portal</a>`,
    troubleshooting: [
      "Close the program that is not working (Teams, Outlook, Word, Excel, and so on), then open it again.",
      "If it still does not work, restart your computer and try that program one more time.",
      "If that does not fix it, please contact Apex using the information below."
    ],
    turnaround: "Most problems are handled the same business day. Bigger account issues can take 1–2 business days.",
    terminal: true
  },

  "enabled": {
    text: `For Enabled + issues, contact fetch: 
        <a href="tel:18887228610" class="text-blue-600 underline">1-888-722-8610</a> / 
        <a href="https://andersenprod.service-now.com/csm" target="_blank" class="text-blue-600 underline">ServiceNow Portal</a>`,
    troubleshooting: [
      "Close the Enabled+ page, wait a few seconds, then open it again.",
      "If you still cannot get in, please contact fetch using the information below. Do not keep guessing your password."
    ],
    turnaround: "Login help is often 4–8 business hours. Bigger changes can take 1–3 business days.",
    terminal: true
  },

  "rforce/rSuite": {
    text: `For rForce/rSuite, contact fetch: 
        <a href="tel:18887228610" class="text-blue-600 underline">1-888-722-8610</a> / 
        <a href="https://andersenprod.service-now.com/csm" target="_blank" class="text-blue-600 underline">ServiceNow Portal</a>`,
    troubleshooting: [
      "Close the rForce or rSuite page, then open it again.",
      "If it still will not load or let you in, please contact fetch using the information below."
    ],
    turnaround: "Most issues take about 1 business day. Permission changes can take 2–3 business days.",
    terminal: true
  },

  "ensemble": {
    text: `For Ensemble, contact fetch: 
        <a href="tel:18887228610" class="text-blue-600 underline">1-888-722-8610</a> / 
        <a href="https://andersenprod.service-now.com/csm" target="_blank" class="text-blue-600 underline">ServiceNow Portal</a>`,
    troubleshooting: [
      "Close Ensemble all the way, then open it again.",
      "If it still does not work, please contact fetch using the information below."
    ],
    turnaround: "You should hear back within 1 business day. Some fixes can take 2–4 business days.",
    terminal: true
  },

  "five9": {
    text: `For Five9 Login Issues, contact internal IT: 
          <a href="https://forms.office.com/r/wSH8WXaGPu?origin=lprLink" target="_blank" class="text-blue-600 underline">Submit a ticket here</a>`,
    troubleshooting: [
      "Make sure Caps Lock is off, then try logging in one more time.",
      "If you still cannot get in, please contact Internal IT using the ticket link below. Do not keep guessing your password."
    ],
    turnaround: "Usually the same or next business day after you submit a ticket.",
    terminal: true
  },

  "other": {
    text: `For any other issues, contact Apex: 
        <a href="tel:18887228610" class="text-blue-600 underline">704-895-0010</a> option 7 / 
        <a href="https://rba.myportallogin.com/" target="_blank" class="text-blue-600 underline">ApexManage360 Portal</a>`,
    troubleshooting: [
      "Close the program, then open it again.",
      "If that does not help, restart your computer and try once more.",
      "If it still does not work, please contact Apex using the information below."
    ],
    turnaround: "Apex usually responds the same business day. Fixing it often takes 1–3 business days.",
    terminal: true
  }
};

const passwordSupport = {
  "windows-login": {
    text: `For Windows Login Issues, contact Apex: 
          <a href="tel:18887228610" class="text-blue-600 underline">704-895-0010</a> option 7 / 
          <a href="https://rba.myportallogin.com/" target="_blank" class="text-blue-600 underline">ApexManage360 Portal</a>`,
    troubleshooting: [
      "Look at the keyboard and make sure Caps Lock is off.",
      "If you recently changed your password, try the new one (not the old one).",
      "If it still says the password is wrong, stop trying so your account does not get locked. Please contact Apex using the information below."
    ],
    turnaround: "During business hours, a reset is often done in 30–60 minutes. If the account is locked, it may take the rest of the business day.",
    terminal: true
  },

  "ms365-login": {
    text: `For MS365 Login Issues, contact Apex: 
          <a href="tel:18887228610" class="text-blue-600 underline">704-895-0010</a> option 7 / 
          <a href="https://rba.myportallogin.com/" target="_blank" class="text-blue-600 underline">ApexManage360 Portal</a>`,
    troubleshooting: [
      "Close Teams or Outlook, then open it again and try your work email and password.",
      "If your phone asks you to approve a sign-in, tap Yes.",
      "If you still cannot get in, please contact Apex using the information below. Do not keep guessing your password."
    ],
    turnaround: "Usually the same business day. Setting up a new phone for sign-in can take 1 business day.",
    terminal: true
  },

  "five9-login": {
    text: `For Five9 Login Issues, contact internal IT: 
          <a href="https://forms.office.com/r/wSH8WXaGPu?origin=lprLink" target="_blank" class="text-blue-600 underline">Submit a ticket here</a>`,
    troubleshooting: [
      "Make sure Caps Lock is off, then try logging in one more time.",
      "If you still cannot get in, please contact Internal IT using the ticket link below."
    ],
    turnaround: "Usually the same or next business day.",
    terminal: true
  },

  "enabled-password": {
    text: `For Enabled+ password issues, contact fetch: 
          <a href="tel:18887228610" class="text-blue-600 underline">1-888-722-8610</a> or visit 
          <a href="https://andersenprod.service-now.com/csm" target="_blank" class="text-blue-600 underline">ServiceNow Portal</a>`,
    troubleshooting: [
      "Try logging in one more time. Make sure Caps Lock is off.",
      "If that does not work, please contact fetch using the information below. Do not share your password with anyone."
    ],
    turnaround: "Often 4–8 business hours. Calling during support hours is usually the fastest.",
    terminal: true
  },

  "ensemble-password": {
    text: `For Ensemble password issues, contact fetch: 
          <a href="tel:18887228610" class="text-blue-600 underline">1-888-722-8610</a> or visit 
          <a href="https://andersenprod.service-now.com/csm" target="_blank" class="text-blue-600 underline">ServiceNow Portal</a>`,
    troubleshooting: [
      "Try logging in one more time. Make sure Caps Lock is off.",
      "If that does not work, please contact fetch using the information below. Do not keep guessing your password."
    ],
    turnaround: "Usually the same business day. Trickier account problems can take up to 2 business days.",
    terminal: true
  },

  "culture-suite-password": {
    text: `For CultureSuite Login Issues, contact Apex: 
          <a href="tel:18887228610" class="text-blue-600 underline">704-895-0010</a> option 7 / 
          <a href="https://rba.myportallogin.com/" target="_blank" class="text-blue-600 underline">ApexManage360 Portal</a>`,
    troubleshooting: [
      "Try logging in one more time with your work email. Make sure Caps Lock is off.",
      "If you still cannot get in, please contact Apex using the information below."
    ],
    turnaround: "Usually the same business day. New-hire access can take 1–2 business days.",
    terminal: true
  },

  "rforce-password": {
    text: `For rForce/rSuite password issues, contact fetch: 
          <a href="tel:18887228610" class="text-blue-600 underline">1-888-722-8610</a> or visit 
          <a href="https://andersenprod.service-now.com/csm" target="_blank" class="text-blue-600 underline">ServiceNow Portal</a>`,
    troubleshooting: [
      "Try logging in one more time. Make sure Caps Lock is off.",
      "If it still does not work, stop trying so your account does not get locked. Please contact fetch using the information below."
    ],
    turnaround: "Usually within 1 business day. If you need help right away, calling is faster.",
    terminal: true
  }
};
