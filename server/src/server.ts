import express, { Request, Response } from 'express';

const server= express()

server.get('/ads', (request: Request, response: Response) => {
  return response.send('vai pra la')
})

server.listen(3333)