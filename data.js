const axios = require('axios')
//const { method } = require('bluebird')
const cheerio = require('cheerio')
const express = require('express')
//const { url } = require('inspector')

async function getData() {
    try {
        const siteUrl = 'https://en.wikipedia.org/wiki/Road_safety_in_Europe'

        var {data} = await axios((
            method = "GET",
            url = siteUrl
        ))
       const $ = cheerio.load(data)
        const elementSelector = '#mw-content-text > div.mw-parser-output > table.wikitable.sortable.jquery-tablesorter > thead > tr > th:nth-child(1)'
        $(elementSelector).each((parentIn,parentEl) => {
           //console.log(parentIn)
           $(parentEl).children().each((childEl,childIn) => {
                console.log($(childEl).text())
            })
        })

     //  console.log(data)
    } catch (err) {
        console.error(err)
    }
}

getData()