{{ $lastweek := now.AddDate 0 0 -7 }}
{{ $date := ($lastweek | time.Format "2006-01-02")  }}

{{ if (os.Getenv "HUGO_SINCE") }}
{{ $date = os.Getenv "HUGO_SINCE" }}
{{ end }}

{{ $postResponse := resources.GetRemote (printf "https://api.github.com/search/issues?q=repo:%s%%20type:%s%%20created:%%3E=%s" .repo "issue" $date) (dict
    "method" "get"
    "body" nil
    "headers" (dict
        "Content-Type" "application/json"
        "Accept" "application/vnd.github.v3+json"
    )
)}}
{{ $data := $postResponse.Content | unmarshal }}
{{ range $data.items }}

- [#{{ .number }}]({{ .html_url }}) {{ .title }} by [@{{ .user.login }}]({{ .user.html_url }})<br>
  TODO:remove or add comment{{ end }}
