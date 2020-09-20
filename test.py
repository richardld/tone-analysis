import praw

reddit = praw.Reddit(client_id="B0LRz1mCFYKzog",
                     client_secret="HQUNpVVdJT8qi3X5zcnvdFvinrY",
                     user_agent="my user agent")

for submission in reddit.front.hot():
    # displays the submission title 
    for comment in submission.comments:
        try :
            print(comment.body)
        except:
            pass

