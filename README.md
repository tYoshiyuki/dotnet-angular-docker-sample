# dotnet-angular-docker-sample
Angular と ASP.NET Core で Dockerイメージをビルドするサンプル

## Feature
- .NET8
- ASP.NET Core
- Angular 18

## Note
- フロントエンド: Angular、バックエンド: ASP.NET Core API の構成です。 
- Visual Studio標準の SPAテンプレート は利用せず、それぞれ個別のプロジェクトを作成しています。
- Docker/build-docker.bat (build-docker.sh) を実行することで、Dockerイメージのビルドを行います。
    - マルチステージビルドを利用し、フロントエンド、バックエンドをビルドした上で、アプリケーションサーバのイメージを生成します。
    - Dockerイメージをビルドする際には Docker Desktop が必要です。
