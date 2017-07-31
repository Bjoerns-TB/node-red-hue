[
    {
        "id": "3e95bafa.47d246",
        "type": "tab",
        "label": "Hue"
    },
    {
        "id": "3ba8dbac.4d5624",
        "type": "node-hue-out",
        "z": "3e95bafa.47d246",
        "server": "bd29a1f7.31394",
        "lightID": "light8",
        "name": "",
        "x": 58,
        "y": 83,
        "wires": [
            [
                "1b43a1bb.df298e"
            ]
        ]
    },
    {
        "id": "17441a06.2ee626",
        "type": "ui_colour_picker",
        "z": "3e95bafa.47d246",
        "name": "",
        "label": "Farbe",
        "group": "8f560048.e6851",
        "format": "hex",
        "outformat": "string",
        "showSwatch": true,
        "showPicker": false,
        "showValue": false,
        "showAlpha": false,
        "showLightness": true,
        "order": 0,
        "width": 0,
        "height": 0,
        "passthru": false,
        "topic": "hex",
        "x": 403.5,
        "y": 118,
        "wires": [
            [
                "f1fbd23d.e7d5c"
            ]
        ]
    },
    {
        "id": "1b43a1bb.df298e",
        "type": "function",
        "z": "3e95bafa.47d246",
        "name": "Splitter",
        "func": "var msg1 = {};\nvar msg2 = {};\nvar msg3 = {};\nmsg1.payload = msg.payload.on;\nmsg2.payload = msg.payload.bri;\nmsg3.payload = msg.payload.hex;\nreturn [msg1,msg2,msg3];",
        "outputs": "3",
        "noerr": 0,
        "x": 244.5,
        "y": 82,
        "wires": [
            [
                "ae5d2b50.d51dd8"
            ],
            [
                "7715cdef.00ffa4"
            ],
            [
                "17441a06.2ee626"
            ]
        ]
    },
    {
        "id": "ae5d2b50.d51dd8",
        "type": "ui_switch",
        "z": "3e95bafa.47d246",
        "name": "",
        "label": "switch",
        "group": "8f560048.e6851",
        "order": 0,
        "width": 0,
        "height": 0,
        "passthru": true,
        "decouple": "false",
        "topic": "on",
        "style": "",
        "onvalue": "true",
        "onvalueType": "bool",
        "onicon": "",
        "oncolor": "",
        "offvalue": "false",
        "offvalueType": "bool",
        "officon": "",
        "offcolor": "",
        "x": 400.5,
        "y": 46,
        "wires": [
            [
                "ae2f70ae.da13b"
            ]
        ]
    },
    {
        "id": "7715cdef.00ffa4",
        "type": "ui_slider",
        "z": "3e95bafa.47d246",
        "name": "",
        "label": "slider",
        "group": "8f560048.e6851",
        "order": 0,
        "width": 0,
        "height": 0,
        "passthru": true,
        "topic": "bri",
        "min": 0,
        "max": "100",
        "step": 1,
        "x": 400.5,
        "y": 81,
        "wires": [
            [
                "ae2f70ae.da13b"
            ]
        ]
    },
    {
        "id": "ae2f70ae.da13b",
        "type": "node-hue-in",
        "z": "3e95bafa.47d246",
        "server": "bd29a1f7.31394",
        "lightID": "light8",
        "name": "",
        "x": 702.5,
        "y": 82,
        "wires": []
    },
    {
        "id": "f1fbd23d.e7d5c",
        "type": "function",
        "z": "3e95bafa.47d246",
        "name": "Convert",
        "func": "var msg1 = {};\nmsg1.payload = {\"hex\": msg.payload};\nreturn msg1;",
        "outputs": 1,
        "noerr": 0,
        "x": 549.5,
        "y": 118,
        "wires": [
            [
                "ae2f70ae.da13b"
            ]
        ]
    },
    {
        "id": "bd29a1f7.31394",
        "type": "node-hue-bridge",
        "z": "",
        "name": "",
        "address": "",
        "key": "",
        "interval": "10000"
    },
    {
        "id": "8f560048.e6851",
        "type": "ui_group",
        "name": "Group 1",
        "tab": "d7dafeda.b9b6",
        "order": 1,
        "disp": true,
        "width": 6
    },
    {
        "id": "d7dafeda.b9b6",
        "type": "ui_tab",
        "z": "",
        "name": "HUE",
        "icon": "dashboard",
        "order": 3
    }
]
