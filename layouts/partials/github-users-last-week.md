{{ $lastweek := (now.AddDate 0 0 -7 | time.Format "2006-01-02") }}
{{ $postResponse := resources.GetRemote (printf "https://api.github.com/search/issues?q=repo:%s%%20type:%s%%20created:%%3E=%s" .repo "pr" $lastweek) (dict 
    "method" "get"
    "body" nil
    "headers" (dict 
        "Content-Type" "application/json"
        "Accept" "application/vnd.github.v3+json"
    )
)}}
{{ $data := $postResponse.Content | unmarshal }}
{{ $users := slice  }}
{{ range $data.items }}
{{ $users = $users | append .user.login }}
{{ end }}
{{ range ($users | uniq) }}
* [@{{ . }}](https://github.com/{{ . }}){{ end }}
