{{ $postResponse := resources.GetRemote "https://maxammann:@api.github.com/repos/maplibre/maplibre-rs/releases/generate-notes"  (dict 
    "method" "post"
    "body" `{"tag_name": "macos-v0.19.1", "target_commitish": "c3edea26e58feabab3df04b6d77ea15cfeecba4d", "previous_tag_name": "36a4bcd94605bdc0e448c700fc556a614f55d15a" }` 
    "headers" (dict 
        "Content-Type" "application/json"
    )
)}}

{{ $data := $postResponse.Content | unmarshal }}
{{ $data.body }}
