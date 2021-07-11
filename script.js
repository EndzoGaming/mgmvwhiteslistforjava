fetch("https://api.apispreadsheets.com/data/7294/", {
        method: "POST",
            body: JSON.stringify({"data": {"EXP":"","Name":"","Gamer Tag":"","Discord ID":"","Have java?":"","Claiming,RTP":"","About website":""}}),
            }).then(res =>{
                    if (res.status === 201){
                                // SUCCESS
                                    }
                                        else{
                                                    // ERROR
                                                            }
})
                                                        