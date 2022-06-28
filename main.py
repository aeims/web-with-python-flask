# the actual file to execute

from website import create_app

app = create_app()

if __name__ == '__main__':
    app.run(debug=True)
    # this creates a server
    # debug true means every time we change code the 
    # the server will rerun
    # in production it should be false