from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
options = webdriver.ChromeOptions()
options.add_experimental_option("detach", True)
service = webdriver.ChromeService(executable_path="D:\CarTrade\selenium_prac\drivers\chromedriver-win64\chromedriver.exe")
driver = webdriver.Chrome(service=service,options=options)

url = "https://www.amazon.in/"

driver.get(url)
driver.find_element(By.ID,"twotabsearchtextbox").send_keys("Boat Airdopes",Keys.RETURN)
x = driver.find_elements(By.CLASS_NAME,"a-price-whole")
for i in x:
    print(i.get_attribute("textContent"))
driver.close()