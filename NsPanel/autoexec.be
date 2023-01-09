load("lovelace.be")

import string

var colRed    = 0xF800
var colYellow = 0xFFC0
var colGreen  = 0x07C0

def command(s)
  tasmota.cmd('customsend '+s)
end

def set_dim()
  command("dimmode~1~100")
end

# sets time and date according to Tasmota local time
def set_clock()
  var now = tasmota.rtc()
  var time_raw = now['local']
  var nsp_time = tasmota.time_dump(time_raw)
  command(string.format('time~%d:%02d',nsp_time['hour'],nsp_time['min']))
end
def set_date()
  var weekdays = ["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"];
  var now = tasmota.rtc()
  var time_raw = now['local']
  var nsp_time = tasmota.time_dump(time_raw)
  command(string.format('date~%s, %d. %d. %d',weekdays[nsp_time['weekday']],nsp_time['day'],nsp_time['month'],nsp_time['year']))
end

def set_wifi(v)
  var rssi = tasmota.wifi()['rssi']
  #print(v,rssi)
  if rssi > -60
    command(string.format("statusUpdate~~~~%d",colGreen))
  elif rssi > -75
    command(string.format("statusUpdate~~~~%d",colGreen))
  elif rssi > -85
    command(string.format("statusUpdate~~~~%d",colYellow))
  else
    command(string.format("statusUpdate~~~~%d",colRed))
  end
end
def set_disconnect()
  command(string.format("statusUpdate~~~~%d",colRed))
end

def set_wifi_ext(cmd, idx, payload, payload_json)
  set_wifi( 0 )
end
tasmota.add_cmd('SetWifi', set_wifi_ext)

var activePage = ""
def report_page()
  tasmota.publish_result(string.format('{"page":"%s"}',activePage),"RESULT")
end
def show_page(page)
  activePage = page
  var help = string.split( page, "," )
  command("pageType~"+help[1])
  set_dim()
  report_page()
end
def show_page_ext(cmd, idx, payload, payload_json)
  #print(payload)
  show_page(payload)
end
tasmota.add_cmd('ShowPage', show_page_ext)

show_page("0,screensaver")
command("timeout~20")
tasmota.add_rule("Time#Initialized", set_clock)
tasmota.add_rule("Time#Initialized", set_date)
tasmota.add_rule("Time#Minute", set_clock)
tasmota.add_rule("Time#Minute=1", set_date)
tasmota.add_rule("Tele#Wifi#RSSI", set_wifi)
tasmota.add_rule("wifi#disconnected", set_disconnect)
tasmota.add_rule("Mqtt#Connected",report_page)