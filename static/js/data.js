// data.js

const responses = {
  password: {
    text: "Select which password you need to reset:",
    hasSubMenu: true,
    terminal: false
  },

  email: {
    troubleshooting: [
      "Double-check you're typing your password correctly — caps lock can cause silent failures",
      "Try logging in from a different device (phone, another PC) to see if it's account-wide or device-specific",
      "If using Outlook desktop, try closing and reopening the app, or restarting your computer",
      "Check outlook.office.com directly in a browser to see if the issue is with the app or your account",
      "Confirm you're not out of mailbox storage (a full inbox can cause send/receive errors)"
    ],
    turnaround: "Typically 1-2 business days once submitted to Apex",
    text: `For email issues, contact Apex: 
<a href="tel:18887228610" class="text-blue-600 underline">704-895-0010</a> option 7 / 
<a href="https://rba.myportallogin.com/" target="_blank" class="text-blue-600 underline">ApexManage360 Portal</a>`,
    hasSubMenu: false,
    terminal: true
  },

  software: {
    text: "Please select the software from the dropdown:",
    hasSubMenu: true,
    terminal: false
  },

  hardware: {
    troubleshooting: [
      "Restart the device — this resolves a surprising number of hardware quirks." + 'SOP Link: ' + '<a href="https://www.loom.com/share/908d585ab84642bcbde703a4c102752e" target="_blank" class="text-blue-600 underline">Restarting Your Device</a>',
      "Check all cable connections (power, monitor, dock, peripherals) are fully seated",
      "For peripherals (mouse, keyboard, headset), try a different USB port",
      "For docking stations, try disconnecting and reconnecting the laptop from the dock",
      "Note any error messages, unusual sounds, or lights, this helps IT diagnose faster"
    ],
    turnaround: "Same business day for internal IT (Angel/Derrick) when possible; 1-2 business days if escalated to Apex",
    text: `Contact Internal IT or submit a ticket: <br> (Internal: Angel/Derrick), 
<a href="mailto:achaple@rbacharlotte.com" class="text-blue-600 underline">Angel Chaple</a> <br>
        Submit tickets to Apex: 
<a href="tel:18887228610" class="text-blue-600 underline">704-895-0010</a> option 7 / 
<a href="https://rba.myportallogin.com/" target="_blank" class="text-blue-600 underline">ApexManage360 Portal</a>`,
    hasSubMenu: false,
    terminal: true
  },

  network: {
    troubleshooting: [
      "Restart your computer, this refreshes the network connection" + 'SOP Link: ' + '<a href="https://www.loom.com/share/908d585ab84642bcbde703a4c102752e" target="_blank" class="text-blue-600 underline">Restarting Your Device</a>',
      "If on Wi-Fi, try toggling Wi-Fi off and back on, or switching to a wired connection if available",
      "Check if others nearby are also having connectivity issues (helps identify a broader outage vs. your device)",
      "For VPN issues, fully disconnect and reconnect the VPN client",
      "Try accessing a website you don't normally visit to rule out a site-specific issue vs. a full outage"
    ],
    turnaround: "Typically 1-2 business days once submitted to Apex; faster for outage-level issues",
    text: `For network issues, contact Apex: 
<a href="tel:18887228610" class="text-blue-600 underline">704-895-0010</a> option 7 / 
<a href="https://rba.myportallogin.com/" target="_blank" class="text-blue-600 underline">ApexManage360 Portal</a>`,
    hasSubMenu: false,
    terminal: true
  },

  other: {
    troubleshooting: [
      "Restart the affected application or device before reaching out" + 'SOP Link: ' + '<a href="https://www.loom.com/share/908d585ab84642bcbde703a4c102752e" target="_blank" class="text-blue-600 underline">Restarting Your Device</a>',
      "Note exactly what you were doing when the issue occurred, this speeds up diagnosis",
      "Check if the issue is happening for others on your team, or just you",
      "Take a screenshot of any error message if possible"
    ],
    turnaround: "Typically 1-2 business days once submitted to Apex",
    text: `For all other issues, contact Apex: 
<a href="tel:18887228610" class="text-blue-600 underline">704-895-0010</a> option 7 / 
<a href="https://rba.myportallogin.com/" target="_blank" class="text-blue-600 underline">ApexManage360 Portal</a>`,
    hasSubMenu: false,
    terminal: true
  }
};

const softwareSupport = {
  "ms-365-apps": {
    troubleshooting: [
      "Close and reopen the specific app (Word, Excel, Outlook, etc.)",
      "Restart your computer, this resolves many temporary licensing/sync glitches" + 'SOP Link: ' + '<a href="https://www.loom.com/share/908d585ab84642bcbde703a4c102752e" target="_blank" class="text-blue-600 underline">Restarting Your Device</a>',
      "Check for pending updates: File > Account > Update Options > Update Now",
      "Try signing out of your Microsoft account within the app and signing back in",
      "If a specific file won't open, try opening it from the web version (office.com) to isolate the problem"
    ],
    turnaround: "Typically 1-2 business days once submitted to Apex",
    text: `For MS365 Issues, contact Apex: 
<a href="tel:18887228610" class="text-blue-600 underline">704-895-0010</a> option 7 / 
<a href="https://rba.myportallogin.com/" target="_blank" class="text-blue-600 underline">ApexManage360 Portal</a>`,
    terminal: true
  },

  "enabled": {
    troubleshooting: [
      "Refresh the page or fully close and reopen your browser",
      "Try clearing your browser cache, or open the site in an incognito/private window to rule out a cache issue" + 'SOP Link: ' + '<a href="https://www.youtube.com/watch?v=FVdGaaLZnXU" target="_blank" class="text-blue-600 underline">Clearing Browser Cache</a>', + 'SOP Link: ' + '<a href="https://www.youtube.com/watch?v=LptiifP7iB0" target="_blank" class="text-blue-600 underline">Incognito/Private Window Tutorial</a>',
      "Confirm you're using a supported browser (Chrome or Edge recommended)",
      "Double check your login credentials are correct before assuming it's a system issue"
    ],
    turnaround: "Typically 1-2 business days once submitted to Fetch",
    text: `For Enabled + issues, contact fetch: 
<a href="tel:18887228610" class="text-blue-600 underline">1-888-722-8610</a> / 
<a href="https://andersenprod.service-now.com/csm" target="_blank" class="text-blue-600 underline">ServiceNow Portal</a>`,
    terminal: true
  },

  "rforce/rSuite": {
    troubleshooting: [
      "Refresh the page or fully close and reopen your browser",
      "Try an incognito/private browser window to rule out a cache or extension conflict",
      "Confirm you're using a supported browser (Chrome or Edge recommended)",
      "Note the exact screen/step where the issue occurs, this helps Fetch troubleshoot faster"
    ],
    turnaround: "Typically 1-2 business days once submitted to Fetch",
    text: `For rForce/rSuite, contact fetch: 
<a href="tel:18887228610" class="text-blue-600 underline">1-888-722-8610</a> / 
<a href="https://andersenprod.service-now.com/csm" target="_blank" class="text-blue-600 underline">ServiceNow Portal</a>`,
    terminal: true
  },

  "ensemble": {
    troubleshooting: [
      "Refresh the page or fully close and reopen your browser",
      "Try an incognito/private browser window to rule out a cache or extension conflict" + ' SOP Link: ' + '<a href="https://www.youtube.com/watch?v=LptiifP7iB0" target="_blank" class="text-blue-600 underline">Incognito/Private Window Tutorial</a>',
      "Confirm you're using a supported browser (Chrome or Edge recommended)",
      "Note the exact screen/step where the issue occurs, this helps Fetch troubleshoot faster"
    ],
    turnaround: "Typically 1-2 business days once submitted to Fetch",
    text: `For Ensemble, contact fetch: 
<a href="tel:18887228610" class="text-blue-600 underline">1-888-722-8610</a> / 
<a href="https://andersenprod.service-now.com/csm" target="_blank" class="text-blue-600 underline">ServiceNow Portal</a>`,
    terminal: true
  },

  "five9": {
    troubleshooting: [
      "Update both the Five9 Chrome extension and Google Chrome to their latest versions." + ' SOP Link: ' + '<a href="https://www.loom.com/share/d3ac79675e7746f0b533a1f0325b030a" target="_blank" class="text-blue-600 underline">Five9 Chrome Extension Update</a>',
      "Fully close and reopen Chrome (not just the tab) to refresh the extension's connection" + ' SOP Link: ' + '<a href="https://www.loom.com/share/0a08f1c42d93452595ff11cf2a33584a" target="_blank" class="text-blue-600 underline">Fully Close and Reopen Chrome</a>',
      "Check if you're logged into Five9 in more than one place (another tab, device, or browser profile)",
      "If your status seems stuck or incorrect, try logging out of Five9 completely and logging back in",
      "Note the time the issue occurred and what you were doing (status change, call, screen lock, etc.)"
    ],
    turnaround: "Usually same business day",
    text: `For Five9, contact <a href="mailto:achaple@rbacharlotte.com" class="text-blue-600 underline">Angel Chaple</a>.`,
    terminal: true
  },

  "other": {
    troubleshooting: [
      "Restart the application before reaching out",
      "Note exactly what you were doing when the issue occurred",
      "Check if the issue is happening for others on your team, or just you"
    ],
    turnaround: "Typically 1-2 business days once submitted to Apex",
    text: `For any other issues, contact Apex: 
<a href="tel:18887228610" class="text-blue-600 underline">704-895-0010</a> option 7 / 
<a href="https://rba.myportallogin.com/" target="_blank" class="text-blue-600 underline">ApexManage360 Portal</a>`,
    terminal: true
  }
};

const passwordSupport = {
  "windows-login": {
    troubleshooting: [
      "Double-check caps lock isn't on, and that you're using your most recent password",
      "Confirm you're connected to the internet/network — some login checks require connectivity",
      "If you recently changed your password elsewhere, allow a few minutes for it to sync",
      "Try restarting the computer before assuming it's a lockout"
    ],
    turnaround: "Typically 1-2 business days once submitted to Apex",
    text: `For Windows Login Issues, contact Apex: 
<a href="tel:18887228610" class="text-blue-600 underline">704-895-0010</a> option 7 / 
<a href="https://rba.myportallogin.com/" target="_blank" class="text-blue-600 underline">ApexManage360 Portal</a>`,
    terminal: true
  },

  "ms365-login": {
    troubleshooting: [
      "Double-check caps lock isn't on, and that you're using your most recent password",
      "Try logging in at office.com directly in a browser to isolate whether it's app-specific",
      "Clear your browser cache or try an incognito/private window" + 'SOP Link: ' + '<a href="https://www.youtube.com/watch?v=FVdGaaLZnXU" target="_blank" class="text-blue-600 underline">Clearing Browser Cache</a>',
      "If prompted for multi-factor authentication, confirm your authentication method (phone/app) is working"
    ],
    turnaround: "Typically 1-2 business days once submitted to Apex",
    text: `For MS365 Login Issues, contact Apex: 
<a href="tel:18887228610" class="text-blue-600 underline">704-895-0010</a> option 7 / 
<a href="https://rba.myportallogin.com/" target="_blank" class="text-blue-600 underline">ApexManage360 Portal</a>`,
    terminal: true
  },

  "five9-login": {
    troubleshooting: [
      "Double-check caps lock isn't on, and that you're using your most recent Five9 password",
      "Try logging in from a different browser to rule out a browser-specific issue",
      "Confirm you're using the correct Five9 login URL"
    ],
    turnaround: "Usually same business day",
    text: 'For Five9 passwords, contact <a href="mailto:achaple@rbacharlotte.com" class="text-blue-600 underline">Angel Chaple</a>.',
    terminal: true
  },

  "enabled-password": {
    troubleshooting: [
      "Double-check caps lock isn't on, and that you're using your most recent password",
      "Try an incognito/private browser window to rule out a saved-password conflict" + 'SOP Link: ' + '<a href="https://www.youtube.com/watch?v=LptiifP7iB0" target="_blank" class="text-blue-600 underline">Incognito/Private Window Tutorial</a>',
      "Confirm you're on the correct login page/URL"
    ],
    turnaround: "Typically 1-2 business days once submitted to Fetch",
    text: `For Enabled+ password issues, contact fetch: 
<a href="tel:18887228610" class="text-blue-600 underline">1-888-722-8610</a> or visit 
<a href="https://andersenprod.service-now.com/csm" target="_blank" class="text-blue-600 underline">ServiceNow Portal</a>`,
    terminal: true
  },

  "ensemble-password": {
    troubleshooting: [
      "Double-check caps lock isn't on, and that you're using your most recent password",
      "Try an incognito/private browser window to rule out a saved-password conflict" + 'SOP Link: ' + '<a href="https://www.youtube.com/watch?v=LptiifP7iB0" target="_blank" class="text-blue-600 underline">Incognito/Private Window Tutorial</a>',
      "Confirm you're on the correct login page/URL"
    ],
    turnaround: "Typically 1-2 business days once submitted to Fetch",
    text: `For Ensemble password issues, contact fetch: 
<a href="tel:18887228610" class="text-blue-600 underline">1-888-722-8610</a> or visit 
<a href="https://andersenprod.service-now.com/csm" target="_blank" class="text-blue-600 underline">ServiceNow Portal</a>`,
    terminal: true
  },

  "culture-suite-password": {
    troubleshooting: [
      "Double-check caps lock isn't on, and that you're using your most recent password",
      "Try an incognito/private browser window to rule out a saved-password conflict" + 'SOP Link: ' + '<a href="https://www.youtube.com/watch?v=LptiifP7iB0" target="_blank" class="text-blue-600 underline">Incognito/Private Window Tutorial</a>',
      "Confirm you're on the correct login page/URL"
    ],
    turnaround: "Typically 1-2 business days once submitted to Apex",
    text: `For CultureSuite Login Issues, contact Apex: 
<a href="tel:18887228610" class="text-blue-600 underline">704-895-0010</a> option 7 / 
<a href="https://rba.myportallogin.com/" target="_blank" class="text-blue-600 underline">ApexManage360 Portal</a>`,
    terminal: true
  },

  "rforce-password": {
    troubleshooting: [
      "Double-check caps lock isn't on, and that you're using your most recent password",
      "Try an incognito/private browser window to rule out a saved-password conflict" + 'SOP Link: ' + '<a href="https://www.youtube.com/watch?v=LptiifP7iB0" target="_blank" class="text-blue-600 underline">Incognito/Private Window Tutorial</a>',
      "Confirm you're on the correct login page/URL"
    ],
    turnaround: "Typically 1-2 business days once submitted to Fetch",
    text: `For rForce/rSuite password issues, contact fetch: 
<a href="tel:18887228610" class="text-blue-600 underline">1-888-722-8610</a> or visit 
<a href="https://andersenprod.service-now.com/csm" target="_blank" class="text-blue-600 underline">ServiceNow Portal</a>`,
    terminal: true
  }
};
