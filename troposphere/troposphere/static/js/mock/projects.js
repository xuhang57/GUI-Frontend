import instances from "./instances";

const api = {
    "count": 2,
    "next": null,
    "previous": null,
    "results": [
        {
            "description": "Project generated by Instance Launch.",
            "end_date": null,
            "id": 2,
            "images": [],
            "instances": instances,
            "links": [],
            "name": "mock project 1",
            "owner": {
                "id": 1,
                "url": "https://app.atmo.dev:8000/api/v2/users/01a3cde8-3759-41f8-8b4a-304f31f260d1.json",
                "username": "sgregory",
                "uuid": "01a3cde8-3759-41f8-8b4a-304f31f260d1"
            },
            "start_date": "2016-01-29T17:51:34.621847Z",
            "url": "https://app.atmo.dev:8000/api/v2/projects/4347e813-71b2-4aba-9a4d-b57c3ef3e34e.json",
            "uuid": "4347e813-71b2-4aba-9a4d-b57c3ef3e34e",
            "volumes": [
                {
                    "end_date": null,
                    "id": 82,
                    "identity": {
                        "id": "2",
                        "provider": 4,
                        "url": "https://app.atmo.dev:8000/api/v2/identities/0ed4a4f1-7657-4c61-8bd5-a420fddc569b.json",
                        "uuid": "0ed4a4f1-7657-4c61-8bd5-a420fddc569b"
                    },
                    "name": "needs_mkfs",
                    "provider": 4,
                    "size": 10,
                    "start_date": "2016-04-25T15:49:40.654385Z",
                    "url": "https://app.atmo.dev:8000/api/v2/volumes/45a4a44a-756b-48fc-bd8a-8c8265c85d24.json",
                    "uuid": "45a4a44a-756b-48fc-bd8a-8c8265c85d24"
                }
            ]
        },
        {
            "description": "tacc",
            "end_date": null,
            "id": 45,
            "images": [],
            "instances": instances,
            "links": [],
            "name": "mock project 2",
            "owner": {
                "id": 1,
                "url": "https://app.atmo.dev:8000/api/v2/users/01a3cde8-3759-41f8-8b4a-304f31f260d1.json",
                "username": "sgregory",
                "uuid": "01a3cde8-3759-41f8-8b4a-304f31f260d1"
            },
            "start_date": "2016-02-24T15:59:38.391921Z",
            "url": "https://app.atmo.dev:8000/api/v2/projects/86c3f745-99d7-47d9-9e52-2b50cfbc0f84.json",
            "uuid": "86c3f745-99d7-47d9-9e52-2b50cfbc0f84",
            "volumes": [
                {
                    "end_date": null,
                    "id": 129,
                    "identity": {
                        "id": "2",
                        "provider": 4,
                        "url": "https://app.atmo.dev:8000/api/v2/identities/0ed4a4f1-7657-4c61-8bd5-a420fddc569b.json",
                        "uuid": "0ed4a4f1-7657-4c61-8bd5-a420fddc569b"
                    },
                    "name": "test-vol-create-iu",
                    "provider": 4,
                    "size": 10,
                    "start_date": "2016-05-25T02:57:05.156467Z",
                    "url": "https://app.atmo.dev:8000/api/v2/volumes/eca07de3-c200-440f-8ac3-2fe80537b6b5.json",
                    "uuid": "eca07de3-c200-440f-8ac3-2fe80537b6b5"
                },
                {
                    "end_date": null,
                    "id": 130,
                    "identity": {
                        "id": "2",
                        "provider": 4,
                        "url": "https://app.atmo.dev:8000/api/v2/identities/0ed4a4f1-7657-4c61-8bd5-a420fddc569b.json",
                        "uuid": "0ed4a4f1-7657-4c61-8bd5-a420fddc569b"
                    },
                    "name": "test-vol-create-iu",
                    "provider": 4,
                    "size": 10,
                    "start_date": "2016-05-25T02:57:47.086435Z",
                    "url": "https://app.atmo.dev:8000/api/v2/volumes/e45d9b48-4238-439e-94ce-e9c5076d23a4.json",
                    "uuid": "e45d9b48-4238-439e-94ce-e9c5076d23a4"
                },
                {
                    "end_date": null,
                    "id": 132,
                    "identity": {
                        "id": "2",
                        "provider": 4,
                        "url": "https://app.atmo.dev:8000/api/v2/identities/0ed4a4f1-7657-4c61-8bd5-a420fddc569b.json",
                        "uuid": "0ed4a4f1-7657-4c61-8bd5-a420fddc569b"
                    },
                    "name": "iu test create",
                    "provider": 4,
                    "size": 1,
                    "start_date": "2016-05-25T03:29:24.697617Z",
                    "url": "https://app.atmo.dev:8000/api/v2/volumes/682a1d73-8977-4bfe-8af9-b691fbe53929.json",
                    "uuid": "682a1d73-8977-4bfe-8af9-b691fbe53929"
                }
            ]
        }
    ]
}

export default api.results
export { api };
