# アプリケーションサーバを準備するステージ
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
USER app
WORKDIR /app
EXPOSE 8080

# フロントエンドをビルドするステージ
FROM node:22.4.1 AS build-web
WORKDIR /src
COPY ["DotNetAngularDockerSample.Web/", "."]
RUN npm ci
RUN npm run build

# バックエンドをビルドするステージ
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build-api
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY ["DotNetAngularDockerSample.Api/", "."]
RUN dotnet restore "./DotNetAngularDockerSample.Api.csproj"
RUN dotnet build "./DotNetAngularDockerSample.Api.csproj" -c $BUILD_CONFIGURATION -o /app/build
RUN dotnet publish "./DotNetAngularDockerSample.Api.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

# アプリケーションサーバにビルド結果をデプロイするステージ
FROM base AS final
WORKDIR /app
COPY --from=build-api /app/publish .
COPY --from=build-web /src/dist/browser/ ./wwwroot
ENTRYPOINT ["dotnet", "DotNetAngularDockerSample.Api.dll"]