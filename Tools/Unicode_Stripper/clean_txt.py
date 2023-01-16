import unicodedata

file_name="my_doc.txt"

def remove_unicode(text):
    return unicodedata.normalize('NFKD', text).encode('ascii', 'ignore').decode('utf-8')


def read_file():
    f1=open(file_name, "r", errors='ignore')
    print("opened file")
    text1 = f1.readline()
    loop=True
    while(loop):
        print("iterating")
        temp = f1.readline()
        if(temp!=""):
            print("read a line")
            text1+=temp
        else:
            print("failed to read a line")
            loop=False
    print("finished a loop")
    f1.flush()
    print("Flushed a reader")
    f1.close()
    return text1

def write_file(content):
    print("opening file for writing")
    f1=open(file_name, "w")
    f1.write(content)
    f1.flush()
    f1.close()
    print("success")


def main():
    write_file(remove_unicode(read_file()))  
    

main()