import numpy as np

from .atri import Atri
from fastapi import Request, Response
from atri_utils import *
from rembg import remove
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail
import os

def init_state(at: Atri):
    """
    This function is called everytime "Publish" button is hit in the editor.
    The argument "at" is a dictionary that has initial values set from visual editor.
    Changing values in this dictionary will modify the intial state of the app.
    """
    with open('assets/' + at.Image62.custom.src.split('/')[-1], 'rb') as i:
        with open('back.jpeg', 'wb') as o:
            input = i.read()
            output = remove(input)
            o.write(output)
    at.Image62.custom.src = create_media_response('back.jpeg', mime_type='image/jpeg')
    os.remove('back.jpeg')


def handle_page_request(at: Atri, req: Request, res: Response, query: str):
    """
    This function is called whenever a user loads this route in the browser.
    """
    pass

def handle_event(at: Atri, req: Request, res: Response):
    """
    This function is called whenever an event is received. An event occurs when user
    performs some action such as click button.
    """
    if at.Button70.onClick:
        name = at.Input11.custom.value
        email = at.Input10.custom.value
        user_msg = at.Input9.custom.value
        message = Mail(
            from_email='sanskarg348@gmail.com',
            to_emails='19803023@mail.jiit.ac.in',
            subject='Sending with Twilio SendGrid is Fun',
            html_content=f'<strong>Hey Person Name this is {name} my email is {email} and my query for you is {user_msg}</strong>')
        try:
            sg = SendGridAPIClient(os.environ.get('SENDGRID_API_KEY'))
            response = sg.send(message)
            print(response.status_code)
            print(response.body)
            print(response.headers)
        except Exception as e:
            print(e)
    pass