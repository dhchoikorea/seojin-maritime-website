<?php

function h($text)
{
    return htmlspecialchars($text, ENT_QUOTES, 'UTF-8');
}

function currentYear()
{
    return date('Y');
}

function asset($path)
{
    return BASE_URL.'/assets/'.$path;
}

function upload($path)
{
    return BASE_URL.'/uploads/'.$path;
}
