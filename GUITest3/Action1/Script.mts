SystemUtil.Run "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe", "https://www.amazon.com.tr/" @@ hightlight id_;_133052_;_script infofile_;_ZIP::ssf7.xml_;_

Browser("Amazon.com.tr: Elektronik,").Page("Amazon.com.tr: Elektronik,").Link("Hediye Kartları").Click @@ script infofile_;_ZIP::ssf9.xml_;_
Browser("Amazon.com.tr: Elektronik,").Page("Hediye Kartları - Amazon.com.t").WebButton("a-autoid-2-announce").Click @@ script infofile_;_ZIP::ssf10.xml_;_
Browser("Amazon.com.tr: Elektronik,").Page("Amazon Giriş Yap").Sync
Browser("Amazon.com.tr: Elektronik,").Back @@ hightlight id_;_132630_;_script infofile_;_ZIP::ssf11.xml_;_
 @@ script infofile_;_ZIP::ssf14.xml_;_

RunAction "SecondPage", oneIteration


