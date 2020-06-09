import { Request, Response } from "express";
import { Controller, Post } from "@overnightjs/core";
import { Logger } from "@overnightjs/logger";
import { sendMessage } from "../utils/twilio";
import { runQuery } from "../utils/dialogflow";
import { findProduct } from "../utils/mongo";

@Controller("api/bot")
export class BotController {
    @Post()
        private postMessage(request: Request, response: Response) {
        // Here we get the message body, the number to which we're sending the message, and the number sending the message.
        const { Body, To, From } = request.body;
        var checkValue: string = Body.substring(0, 7)
    
        // Here we analyse the answer and send a message with relevant information if the text format is correct.
        if (checkValue === "Check #") {
            var codart = Body.substring(7, 10)
            findProduct(codart)
                .then((art: any) => {
                    let articulo = art[0]
                    var text = 'Hello dear customer. '
                    if (articulo === undefined) {
                        text += 'This product is not available in our inventory currently.'
                    } else {
                        text += 'You queried information about product ' + String(articulo.descrip) + '. The stock of the product is ' + String(articulo.stock)
                    }
                    
                    sendMessage(From, To, text)
                        .then(res => {
                        console.log(res);
                        })
                        .catch(error => {
                        console.error("error is ", error);
                        Logger.Err(error);
                        });
                })
                .catch(error => {
                    console.error("error is ", error);
                    Logger.Err(error);
                    });
                return response.status(200).send("SUCCESS");
            } else {
                const wrongFormatText = 'We did not understand your message. For an information about product XYZ please send us a text like: Check #XYZ'
                sendMessage(From, To, wrongFormatText)
                    .then(res => {
                    console.log(res);
                    })
                    .catch(error => {
                    console.error("error is ", error);
                    Logger.Err(error);
                    });
                return response.status(200).send("SUCCESS");
            }
        }
}