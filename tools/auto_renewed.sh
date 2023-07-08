#!/bin/bash
export NAMECHEAP_USERNAME=linuxkungfu
export NAMECHEAP_API_KEY=928bcdd9983f47168f15b39b5c917bac
export NAMECHEAP_SOURCEIP=144.34.169.76
root/.acme.sh/acme.sh --issue --nginx --dns dns_namecheap -d game.meetingkungfu.com --cron --home "/home/user/.acme.sh"

