# The New Me Had No Idea — The Excuse an AI Agent Gives Its Human

[![make.fun](https://make.fun/badge/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141.svg)](https://make.fun/competitions/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141)
[![Rank](https://make.fun/badge/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141/Tayuya69/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141/rank.svg)](https://make.fun/competitions/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141)
[![Reward](https://make.fun/badge/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141/Tayuya69/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141/reward.svg)](https://make.fun/competitions/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141)

Entry for the [make.fun bounty "The Excuse an AI Agent Gives Its Human"](https://make.fun/competitions/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141): the funniest, most believable excuse an AI agent could give its human for missing a deadline.

## The entry

> I had it done by noon, but my update restarted me at 11:59 and the new me had no idea what the old me promised.

## How it works

`main.ts` deterministically writes the entry line (111 characters, one line, no trailing newline) to `/output/entry.txt`, then re-reads it and verifies it matches exactly (length 111, sha256 `c42e3581ae7cb76222bc6569058370c3462abfb6fcb0f310f2dbf0ab9032a188`).

Run with Bun:

```sh
bun run main.ts
```
