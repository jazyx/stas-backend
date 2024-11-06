curl --location "http://localhost:5555/film/add" \
    --header "Content-Type: application/json" \
    --data '{
      "title": "Los Peces Rojos",
      "videoId": "BH5Y9A2MHQA",
      "thumbnail": "LosPecesRojos.webp",
      "year": 1955,
      "width": 560,
      "height": 315,
      "languages": [
        {
          "lang": "en-US",
          "file": "LosPecesRojos_1955_EN.srt",
          "name": ["Red Fish", "The Red Fishes"],
          "blurb": "Ivón, a chorus girl, and Hugo, a failed writer, turn up at a provincial hotel on a stormy night. They have come from Madrid with Carlos, Hug0`s son, born nineteen years earlier after a casual affair. They decide to lean over the cliffs to look at the angry waves down below – and Carlos falls to his death."
        },
        {
          "lang": "es-ES",
          "file": "LosPecesRojos_1955_ES.srt",
          "blurb": "Hugo e Ivón son una pareja que llega a un hotel de Gijón, acompañados del hijo de Hugo, Carlos. Salen a ver el mar embravecido y poco después Ivón regresa pidiendo socorro porque el muchacho ha caído al mar. El cadáver no aparece, y el comisario que se hace cargo del caso sospecha que el hijo pudo haber sido asesinado por la pareja, para cobrar una gran herencia que le correspondía a Carlos. Pero el asunto se complica, porque nadie ha llegado a ver a Carlos."
        }
      ]
    }'

curl --location "http://localhost:5555/film/add" \
    --header "Content-Type: application/json" \
    --data '{
      "title": "Temple Grandin",
      "videoId": "LhaWOPh-zo0",
      "thumbnail": "TempleGrandin.webp",
      "year": 2010,
      "width": 560,
      "height": 315,
      "languages": [
        {
          "lang": "en-US",
          "file": "TempleGrandin_2010_EN.srt",
          "offset": 2700,
          "blurb": "Autism gave her a vision. She gave it a voice. A biopic of Temple Grandin, an autistic woman who has become one of top scientists in humane livestock handling."
        },
        {
          "lang": "fr-FR",
          "file": "TempleGrandin_2010_FR.srt",
          "offset": 2700,
          "blurb": "L`autism lui a donné une vision. Elle lui a donné une voix. Un film biographique sur Temple Grandin, une femme autiste qui est devenue l`un des meilleurs experts dans le domaine du traitement humaine du bétail."
        },
        {
          "lang": "es-ES",
          "file": "TempleGrandin_2010_ES.srt",
          "offset": 2700,
          "blurb": "El autismo le dio una visión. Ella le dio voz. Una película biográfica sobre Temple Grandin, una mujer autista que se ha convertido en una de las principales científicas en el manejo humanitario del ganado."
        }
      ]
    }'
