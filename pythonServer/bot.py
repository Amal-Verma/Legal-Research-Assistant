from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options
from selenium import webdriver
import time


# Function to scrape the website
def ai_chat_bot(prompt_text):
    # Set Chrome options for headless mode
    chrome_options = Options()
    chrome_options.add_argument("--headless")  # Enable headless mode

    # Initialize the Chrome driver
    driver = webdriver.Chrome(options=chrome_options)

    try:
        # Navigate to the webpage
        driver.get("https://app.v-lawyer.ai/tools/legal-qanda-621731")

        # Find the input text box and enter the prompt
        input_text_box = WebDriverWait(driver, 10).until(EC.visibility_of_element_located((By.CSS_SELECTOR, '.flex-1.md\\:mr-4')))
        input_text_box.send_keys(prompt_text)

        # Find and click the submit button
        submit_button = WebDriverWait(driver, 10).until(EC.visibility_of_element_located((By.CSS_SELECTOR, '.bg-primary.text-primary-foreground')))
        submit_button.click()

        time.sleep(15)

        # Wait for the response to load
        response_paragraph = WebDriverWait(driver, 10).until(EC.visibility_of_element_located((By.CSS_SELECTOR, '.text-gray-600.dark\\:text-gray-400.mb-4.h-60.overflow-y-auto')))
        response_text = response_paragraph.text

        return response_text

    finally:
        # Close the browser
        driver.quit()
