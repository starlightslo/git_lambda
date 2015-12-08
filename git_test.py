__author__ = 'Tony'
from __future__ import print_function

def lambda_handler(event, context):
    import datetime
    print('Hello Github + Lambda')
    print('Check complete at {}'.format(str(datetime.datetime.now())))
    return 'OK'
